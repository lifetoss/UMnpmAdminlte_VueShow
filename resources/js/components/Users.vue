<template>
    <div class="container">
        <div class="row mt-5">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">User table</h3>

              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover">
                  <tbody><tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>type</th>
                    <th>time</th>
                    <th>modify</th>
                  </tr>

                  <tr v-for="user in users" :key="user.id">
	                  <td>{{user.id}}</td>
	                  <td>{{user.name}}</td>
	                  <td>{{user.email}}</td>
	                  <td>{{user.type | upText}}</td>
	                  <td>{{user.created_at | myDate }}</td>
	                  <td>
                        <a href=""><i class="fa fa-edit green"></i></a>/
                        <a href=""><i class="fa fa-trash red"></i></a>
                    </td>
                  </tr>
                  
                </tbody></table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>




    </div>
</template>

<script>
    export default {

         data() {
            return{
          users :{}	// here {} this is object and [] this is array
            } 
        },
        methods:{

          loadUsers(){
        		axios.get("api/user").then(({ data }) => (this.users = data.data));
        	    }
        },

        created() {
            this.loadUsers();
        }
    }
</script>
