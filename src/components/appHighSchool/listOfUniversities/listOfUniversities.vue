<template>
    <div class="listOfUniversities">
        <h1>{{$t('listOfUniversities.title')}}</h1>
        <p class="introduce">{{$t('listOfUniversities.introduce')}}</p>
        <ul class="list">
            <li v-for="(listItem,listIndex) in list">
                <h2 class="header">{{$t('listOfUniversities.listTitle')[listIndex]}}</h2>
                <div class="main">
                    <div class="tabs">
                        <div class="item" :class="{'selected':listItem.showIndex==0}" @click="listItem.showIndex=0">{{$t('listOfUniversities.tabs0')}}</div>
                        <div class="item" :class="{'selected':listItem.showIndex==1}" @click="listItem.showIndex=1">{{$t('listOfUniversities.tabs1')}}</div>
                    </div>
                    <div class="content" v-show="listItem.showIndex==0">
                        <div class="item" v-for="(item,index) in listItem.integritySchool"><span class="num" :class="{'front':index<3}">{{index+1}}</span>{{item}}</div>
                    </div>
                    <div class="content" v-show="listItem.showIndex==1">
                        <div class="item" v-for="(item,index) in listItem.liberalArtsCollege"><span class="num">{{index+1}}</span>{{item}}</div>
                    </div>
                    <div class="lookAll">{{$t('listOfUniversities.lookAll')}}</div>
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
                // listTitle:["US NEWS排行","世界排行榜","热度榜","竞争最激烈排名","录取人数排行榜单","录取率排行榜单","男女比例排行榜单","师资力量榜单","学校环境"],
                list:[
                    {
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