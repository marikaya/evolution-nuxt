<template>
    <div>
        <TopicHeader/>
        <Entry/>
        <Entry/>
    </div>
</template>

<script>
    import TopicHeader from "./topicHeader";
    import Entry from "./entry";
    export default {
        name: 'EntryLister',
        components: {Entry, TopicHeader}
    }
</script>