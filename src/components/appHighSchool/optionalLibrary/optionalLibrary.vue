<template>
    <div class="optionalLibrary">
        <h1>专业库</h1>
        <div class="contain">
            <div v-for="(list,listIndex) in list" class="list">
                <h2 class="header">{{list.title}}</h2>
                <ul class="item">
                    <li v-for="(item,index) in list.arr">{{item}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    let self;
    export default{
        name: 'optionalLibrary',
        data(){
            return{
                list:[
                    {
                        title:"商科",
                        arr:["会计与金融","酒店旅游管理","经济学","商科与管理学"]
                    },
                    {
                        title:"工科",
                        arr:[
                            "信息系统","计算机工程","电气工程/电子工程/通信工程","机械系统","航空航天工程","材料工程","土木工程"
                            ,"土木工程","化学工程","环境工程/环境卫生工程","工业/制造/系统工程","生物工程/农业工程","生物医学/生物工程"
                            ,"核工程","石油工程","信息系统管理"
                        ],
                    },
                    {
                        title:"理科",
                        arr:[
                            "化学","生物科学","物理","地理与环境学","数学","地球和海洋科学","农业与林业学"
                        ],
                    },
                    {
                        title:"社会科学",
                        arr:[
                            "制药与药物学","解剖生物学","戏剧与舞蹈","媒体影视","新闻，出版与公共关系","社会学","社会工作"
                            ,"社会政策","哲学","政治学","人类学","教育学","心理学"
                            ,"法律","犯罪学","建筑学","建筑与城镇规划","现代语言与语言学","英语与创作"
                            ,"古典文学","历史","历史学与艺术史","设计与工艺","艺术与设计","时尚与纺织"
                            ,"美洲研究","宗教研究与神学","音乐","运动科学","医学","卫生专业"
                            ,"兽医学","牙科","护理与助产"
                        ],
                    }
                ]
            }
        },
        methods: {
        },
        created(){
            self=this;
        },
        components:{
        }
    }

</script>
<style lang="scss">
    @import './optionalLibrary.scss';
</style>