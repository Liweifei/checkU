<template>
    <div class="listOfUniversities">
        <h1>高校榜单</h1>
        <p class="introduce">基于大众点U对留学高校的理解，汇聚了学校与专业的教育评价榜</p>
        <ul class="list">
            <li v-for="(listItem,listIndex) in list">
                <h2 class="header">{{listItem.title}}</h2>
                <div class="main">
                    <div class="tabs">
                        <div class="item" :class="{'selected':listItem.showIndex==0}" @click="listItem.showIndex=0">综合性大学</div>
                        <div class="item" :class="{'selected':listItem.showIndex==1}" @click="listItem.showIndex=1">文理学院</div>
                    </div>
                    <div class="content" v-show="listItem.showIndex==0">
                        <div class="item" v-for="(item,index) in listItem.integritySchool"><span class="num" :class="{'front':index<3}">{{index+1}}</span>{{item}}</div>
                    </div>
                    <div class="content" v-show="listItem.showIndex==1">
                        <div class="item" v-for="(item,index) in listItem.liberalArtsCollege"><span class="num">{{index+1}}</span>{{item}}</div>
                    </div>
                    <div class="lookAll">查看全部  ></div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script type="text/javascript">
    let self;
    export default{
        name: 'listOfUniversities',
        data(){
            return{
                list:[
                    {
                        title:"US NEWS排行",
                        showIndex:0,
                        integritySchool:[
                            "普林斯顿大学",
                            "哈佛大学",
                            "哥伦比亚大学",
                            "麻省理工大学",
                            "芝加哥大学",
                        ],
                        liberalArtsCollege:[
                            "普林斯顿大学",
                            "哈佛大学",
                            "哥伦比亚大学",
                            "麻省理工大学",
                            "芝加哥大学",
                        ]
                    },
                    {
                        title:"世界排行榜",
                        showIndex:0,
                        integritySchool:[
                            "普林斯顿大学",
                            "哈佛大学",
                            "哥伦比亚大学",
                            "麻省理工大学",
                            "芝加哥大学",
                        ],
                        liberalArtsCollege:[
                            "普林斯顿大学",
                            "哈佛大学",
                            "哥伦比亚大学",
                            "麻省理工大学",
                            "芝加哥大学",
                        ]
                    },
                    {
                        title:"热度榜",
                        showIndex:0,
                        integritySchool:[
                            "普林斯顿大学",
                            "哈佛大学",
                            "哥伦比亚大学",
                            "麻省理工大学",
                            "芝加哥大学",
                        ],
                        liberalArtsCollege:[
                            "普林斯顿大学",
                            "哈佛大学",
                            "哥伦比亚大学",
                            "麻省理工大学",
                            "芝加哥大学",
                        ]
                    },
                    {
                        title:"竞争最激烈排名",
                        showIndex:0,
                        integritySchool:[
                            "普林斯顿大学",
                            "哈佛大学",
                            "哥伦比亚大学",
                            "麻省理工大学",
                            "芝加哥大学",
                        ],
                        liberalArtsCollege:[
                            "普林斯顿大学",
                            "哈佛大学",
                            "哥伦比亚大学",
                            "麻省理工大学",
                            "芝加哥大学",
                        ]
                    },
                    {
                        title:"录取人数排行榜单",
                        showIndex:0,
                        integritySchool:[
                            "普林斯顿大学",
                            "哈佛大学",
                            "哥伦比亚大学",
                            "麻省理工大学",
                            "芝加哥大学",
                        ],
                        liberalArtsCollege:[
                            "普林斯顿大学",
                            "哈佛大学",
                            "哥伦比亚大学",
                            "麻省理工大学",
                            "芝加哥大学",
                        ]
                    },
                    {
                        title:"录取率排行榜单",
                        showIndex:0,
                        integritySchool:[
                            "普林斯顿大学",
                            "哈佛大学",
                            "哥伦比亚大学",
                            "麻省理工大学",
                            "芝加哥大学",
                        ],
                        liberalArtsCollege:[
                            "普林斯顿大学",
                            "哈佛大学",
                            "哥伦比亚大学",
                            "麻省理工大学",
                            "芝加哥大学",
                        ]
                    },
                    {
                        title:"男女比例排行榜单",
                        showIndex:0,
                        integritySchool:[
                            "普林斯顿大学",
                            "哈佛大学",
                            "哥伦比亚大学",
                            "麻省理工大学",
                            "芝加哥大学",
                        ],
                        liberalArtsCollege:[
                            "普林斯顿大学",
                            "哈佛大学",
                            "哥伦比亚大学",
                            "麻省理工大学",
                            "芝加哥大学",
                        ]
                    },
                    {
                        title:"师资力量榜单",
                        showIndex:0,
                        integritySchool:[
                            "普林斯顿大学",
                            "哈佛大学",
                            "哥伦比亚大学",
                            "麻省理工大学",
                            "芝加哥大学",
                        ],
                        liberalArtsCollege:[
                            "普林斯顿大学",
                            "哈佛大学",
                            "哥伦比亚大学",
                            "麻省理工大学",
                            "芝加哥大学",
                        ]
                    },
                    {
                        title:"学校环境",
                        showIndex:0,
                        integritySchool:[
                            "普林斯顿大学",
                            "哈佛大学",
                            "哥伦比亚大学",
                            "麻省理工大学",
                            "芝加哥大学",
                        ],
                        liberalArtsCollege:[
                            "普林斯顿大学",
                            "哈佛大学",
                            "哥伦比亚大学",
                            "麻省理工大学",
                            "芝加哥大学",
                        ]
                    },
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
    @import './listOfUniversities.scss';
</style>