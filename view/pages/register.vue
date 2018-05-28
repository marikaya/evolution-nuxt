<template>
    <div class="card">
        <div class="card-body">
            <div class="card-title">Kayit Ol</div>
               <div class="row">
                   <div class="col-md-8">
                       <form action="">
                           <div class="form-group row">
                               <label class="col-md-3 control-label">Kullanici Adi</label>
                               <div class="col-md-9">
                                   <input name="username" type="text" class="form-control form-control-sm"/>
                               </div>
                           </div>


                           <div class="form-group row">
                               <label class="col-md-3 control-label">Email</label>
                               <div class="col-md-9">
                                   <input name="email" type="email" class="form-control form-control-sm"/>
                               </div>
                           </div>


                           <div class="form-group row">
                               <label class="col-md-3 control-label">Parola</label>
                               <div class="col-md-9">
                                   <input name="password" type="password" class="form-control form-control-sm"/>
                               </div>
                           </div>

                           <div class="form-group row">
                               <label class="col-md-3 control-label">Parola Tekrar</label>
                               <div class="col-md-9">
                                   <input name="password2" type="password" class="form-control form-control-sm"/>
                               </div>
                           </div>


                           <div class="form-group row">
                               <label class="col-md-3 control-label">Cinsiyet</label>
                               <div class="col-md-9">
                                   <select class="form-control form-control-sm" name="gender" id="">
                                       <option value="">erkek</option>
                                       <option value="">kiz</option>
                                       <option value="">karisik</option>
                                   </select>
                               </div>
                           </div>


                           <div class="form-group row">
                               <label class="col-md-3 control-label">Dogum Tarihi</label>
                               <div class="col-md-9">
                                   <input  name="birthdate" class="form-control form-control-sm"/>
                               </div>
                           </div>


                       </form>
                   </div>
                   <div class="col-md-4">
                       <p>lorem</p>
                   </div>
               </div>
        </div>
    </div>
</template>