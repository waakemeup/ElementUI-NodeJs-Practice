<template>
    <div>
        <el-table :data="articles">
        <el-table-column prop="title" label="标题" width="140">
        </el-table-column>
        <el-table-column prop="body" label="内容" width="220">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
                <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
                <el-button @click="remove(scope.row._id)" type="text" size="small">删除</el-button>
            </template>
        </el-table-column>
      </el-table>
    </div>
    
</template>

<script>
  export default {
    data() {
      
      return {
        articles:[]
      }
    },
    methods:{
        edit(){

        },
        remove(){

        }
    },
    created(){
      this.$http.get('articles').then(res=>{
          this.articles=res.data
      })
    }
  };
</script>
