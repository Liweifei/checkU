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
                            
                        ],
                        liberalArtsCollege:[
                            
                        ]
                    },
                    {
                        showIndex:0,
                        integritySchool:[
                            
                        ],
                        liberalArtsCollege:[
                            
                        ]
                    },
                    {
                        showIndex:0,
                        integritySchool:[
                            
                        ],
                        liberalArtsCollege:[
                            
                        ]
                    },
                    {
                        showIndex:0,
                        integritySchool:[
                            
                        ],
                        liberalArtsCollege:[
                            
                        ]
                    },
                    {
                        showIndex:0,
                        integritySchool:[
                            
                        ],
                        liberalArtsCollege:[
                            
                        ]
                    },
                    {
                        showIndex:0,
                        integritySchool:[
                            
                        ],
                        liberalArtsCollege:[
                            
                        ]
                    },
                    {
                        showIndex:0,
                        integritySchool:[
                            
                        ],
                        liberalArtsCollege:[
                            
                        ]
                    },
                    {
                        showIndex:0,
                        integritySchool:[
                            
                        ],
                        liberalArtsCollege:[
                            
                        ]
                    },
                    {
                        showIndex:0,
                        integritySchool:[
                            
                        ],
                        liberalArtsCollege:[
                            
                        ]
                    },
                ]
            }
        },
        methods: {
            getSchoolList(){//获取榜单数据
                self.$http.get(self.$api+'/school/getSchoolListByCondition', {
                    params:{
                        ranking:5
                    }
                }).then(function (response) {
                    self.list.forEach((item)=>{
                        item.integritySchool=[];
                        item.liberalArtsCollege=[];
                    })
                    let data=response.data;
                    let name=self.$i18n.locale=="en"?"name_en":"name_zh";
                    // US NEWS排行
                    self.list[0].integritySchool.push(...(data.us_news_desc_List1.map(item=>item[name])));
                    self.list[0].liberalArtsCollege.push(...(data.us_news_desc_List2.map(item=>item[name])));
                    // 世界排行榜
                    self.list[1].integritySchool.push(...(data.world_ranking_desc_List1.map(item=>item[name])));
                    self.list[1].liberalArtsCollege.push(...(data.world_ranking_desc_List2.map(item=>item[name])));
                    // 热度榜
                    self.list[2].integritySchool.push(...(data.hot_desc_List1.map(item=>item[name])));
                    self.list[2].liberalArtsCollege.push(...(data.hot_desc_List2.map(item=>item[name])));
                    // 竞争最激烈排名
                    self.list[3].integritySchool.push(...(data.enrolment_asc_List1.map(item=>item[name])));
                    self.list[3].liberalArtsCollege.push(...(data.enrolment_asc_List2.map(item=>item[name])));
                    // 录取人数排行榜单
                    self.list[4].integritySchool.push(...(data.enrolment_number_desc_List1.map(item=>item[name])));
                    self.list[4].liberalArtsCollege.push(...(data.enrolment_number_desc_List2.map(item=>item[name])));
                    // 录取率排行榜单
                    self.list[5].integritySchool.push(...(data.enrolment_desc_List1.map(item=>item[name])));
                    self.list[5].liberalArtsCollege.push(...(data.enrolment_desc_List2.map(item=>item[name])));
                    // 男女比例排行榜单
                    self.list[6].integritySchool.push(...(data.male_female_ratio_desc_List1.map(item=>item[name])));
                    self.list[6].liberalArtsCollege.push(...(data.male_female_ratio_desc_List2.map(item=>item[name])));
                    // 师资力量榜单
                    self.list[7].integritySchool.push(...(data.student_staff_ratio_desc_List1.map(item=>item[name])));
                    self.list[7].liberalArtsCollege.push(...(data.student_staff_ratio_desc_List2.map(item=>item[name])));
                    // 学校环境
                    self.list[8].integritySchool.push(...(data.environment_desc_List1.map(item=>item[name])));
                    self.list[8].liberalArtsCollege.push(...(data.environment_desc_List2.map(item=>item[name])));
                }).catch(function (error) {
                    console.log(error);
                });
            },
        },
        created(){
            self=this;
            self.getSchoolList();
        },
        components:{
        }
    }

</script>
<style lang="scss">
    @import './listOfUniversities.scss';
</style>