import fs from 'fs';
import download from 'image-downloader';
import axios from 'axios';
import chalk from 'chalk';

import Anime from '../models/anime';
import Episode from '../models/episode';
import Genre from '../models/genre';

const request = require('request');
const throttledRequest = require('throttled-request')(request);
const throttledQueue = require('throttled-queue');
const throttle = throttledQueue(15, 700);
// This will throttle the requests so no more than 5 are made every second
throttledRequest.configure({
    requests: 5,
    milliseconds: 1500,
});

const controller = {};
controller.anime = (req, res) => {
    for (let i = 0; i < 630; i += 1) {
        throttledRequest(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${i * 20}`, (error, response, body) => {
            if (error) {
                console.log(error);
                return false;
            }
            JSON.parse(body).data.forEach((anime) => {
                const attributes = anime.attributes;
                const result = {};
                const model = new Anime({
                    canonicalTitle: attributes.canonicalTitle,
                    titles: attributes.titles,
                    kitsuId: anime.id,
                    synopsis: attributes.synopsis,
                    synopsisTr: attributes.synopsis,
                    averageRating: attributes.averageRating,
                    startDate: attributes.startDate ? new Date(attributes.startDate) : null,
                    endDate: attributes.endDate ? new Date(attributes.endDate) : null,
                    ratingRank: attributes.ratingRank,
                    popularityRank: attributes.popularityRank,
                    ageRating: attributes.ageRating,
                    ageRatingGuide: attributes.ageRatingGuide,
                    status: attributes.status,
                    episodeCount: attributes.episodeCount,
                    nsfw: attributes.nsfw,
                    youtubeVideoId: attributes.youtubeVideoId || null,
                    posterImages: {},
                    coverImages: {}
                });
                model.save().then((savedAnime) => {
                    console.info(`ANIME : ${savedAnime.canonicalTitle} has successfully saved`);
                });
            });
        });
    }
    res.send();
};
controller.episode = (req, res) => {
    Anime.find().then((animes) => {
        animes.forEach((anime) => {
            for (let k = 0; k < anime.metaCount; k++) {
                throttle(function () {
                    let request = axios.get(`https://kitsu.io/api/edge/anime/${anime.kitsuId}/episodes?page[limit]=20&page[offset]=${k * 20}`);
                    request.then((episodes) => {
                        const data = episodes.data.data;
                        if (data.length <= 0) {
                            return false;
                        }
                        data.forEach((episode) => {
                            const attributes = episode.attributes;
                            const model = new Episode({
                                canonicalTitle: attributes.canonicalTitle,
                                seasonNumber: attributes.seasonNumber,
                                episode: attributes.number,
                                relativeNumber: attributes.relativeNumber,
                                synopsis: attributes.synopsis || null,
                                airDate: new Date(attributes.airdate),
                                kitsuReleaseDate: new Date(attributes.createdAt),
                                anime: anime._id,
                            });
                            model.save().then(() => {
                                console.info(`EPISODE : ${chalk.bold.red(anime.canonicalTitle)} episode added`);
                            });
                        });
                    });
                    request.catch((error) => {
                        console.log(error);
                        process.exit();
                    })
                });
            }
        });
    });
    res.send('bö');
};
controller.genre = (req, res) => {
    request('https://kitsu.io/api/edge/genres?page%5Blimit%5D=900&page%5Boffset%5D=0', (err, response, body) => {
        const resp = JSON.parse(body).data;
        resp.forEach((genre) => {
            const attribute = genre.attributes;
            const result = {};

            const model = new Genre({
                name: attribute.name,
                slug: attribute.slug,
                description: attribute.description,
            });

            model.save(result).then((savedGenre) => {
                console.info(`GENRE: ${savedGenre.name} added to DB`);
            });
        });
    });
    res.send();
};
controller.animegenre = (req, res) => {
    Anime.find().then((animes) => {
        animes.forEach((anime) => {
            throttle(function () {
                let request = axios.get(`https://kitsu.io/api/edge/anime/${anime.kitsuId}/genres`);
                request.then((genres) => {
                    const data = genres.data.data;
                    if (data.length <= 0) {
                        return false;
                    }
                    let genreList = [];
                    data.forEach((genre) => {
                        genreList.push(genre.attributes.slug);
                    });
                    const foundGenres = Genre.find({slug: {$in: genreList}}).lean().distinct('_id').exec();
                    foundGenres.then(result => {
                        anime.genres = result;
                        anime.save();
                        console.log('GENRE : ' + anime.canonicalTitle + ' added');
                    });
                });
                request.catch((error) => {
                    console.log(error);
                })
            });
        });
    });
    res.send('asd');
};
controller.media = (req, res) => {
    Anime.find().then((animes) => {
        animes.forEach((anime) => {
            throttle(function () {
                let request = axios.get(`https://kitsu.io/api/edge/anime/${anime.kitsuId}/genres`);
                request.then((genres) => {
                    const data = genres.data.data;
                    if (data.length <= 0) {
                        return false;
                    }
                    let genreList = [];
                    data.forEach((genre) => {
                        genreList.push(genre.attributes.slug);
                    });
                    const foundGenres = Genre.find({slug: {$in: genreList}}).lean().distinct('_id').exec();
                    foundGenres.then(result => {
                        anime.genres = result;
                        anime.save();
                        console.log('GENRE : ' + anime.canonicalTitle + ' added');
                    });
                });
                request.catch((error) => {
                    console.log(error);
                })
            });
        });
    });
    res.send('asd');
};
export default controller;


/*/

const id = savedAnime.id;
                    const posterDir = `${__dirname}/../../public/media/poster_images/${id}/`;
                    const coverDir = `${__dirname}/../../public/media/cover_images/${id}/`;

                    if (!fs.existsSync(posterDir)) {
                        fs.mkdirSync(posterDir);
                    }
                    if (!fs.existsSync(coverDir)) {
                        fs.mkdirSync(coverDir);
                    }


                    // download posters
                    for (let key in attributes.posterImage) {
                        download.image({
                            url: attributes.posterImage[key],
                            dest: `${posterDir + key}.jpg`,
                        }).then((poster) => {
                            const size = poster.filename.split('/').pop().split('.')[0];
                            savedAnime.posterImages[size] = '/media/poster_images/' + savedAnime.id + '/' + size + '.jpg';
                            savedAnime.save();
                        }).catch((error) => {
                            console.log('unable to get an image');
                            console.log(error.message);
                        });
                    }
                    // download covers
                    for (var key in attributes.coverImage) {
                        download.image({
                            url: attributes.coverImage[key],
                            dest: `${coverDir + key}.jpg`,
                        }).then((cover) => {
                            const size = cover.filename.split('/').pop().split('.')[0];
                            savedAnime.coverImages[size] = '/media/cover_images/' + savedAnime.id + '/' + size + '.jpg';
                            savedAnime.save();
                        }).catch((error) => {
                            console.log('unable to get an image');
                            console.log(error.message);
                        });
                    }
                    for (let k = 0; k < 1; k++) {
                        throttledRequest(`https://kitsu.io/api/edge/anime/${savedAnime.kitsuId}/episodes?page[limit]=20&page[offset]=${k * 20}`, (error, response, body) => {
                            JSON.parse(body).data.forEach((episode) => {
                                const attributes = episode.attributes;
                                const result = {};
                                Object.assign(result, {
                                    canonicalTitle: attributes.canonicalTitle,
                                    seasonNumber: attributes.seasonNumber,
                                    episode: attributes.episode,
                                    relativeNumber: attributes.relativeNumber,
                                    synopsis: attributes.synopsis || null,
                                    airdate: new Date(attributes.airdate),
                                    animeId: savedAnime.id,
                                });
                                Episode.save(result).then(() => {
                                    console.info(`EPISODE : ${savedAnime.canonicalTitle} episode added`);
                                });
                            });
                        });
                    }
 */