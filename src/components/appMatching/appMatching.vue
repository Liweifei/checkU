<template>
    <div class="appMatching">
        <app-header not-index="true"></app-header>
        <div class="hint" v-show="!mainVisible">
            <div class="bg">
                <h1 class="title">{{$t('appMatching.title')}}</h1>
                <h3 class="subTitle">{{$t('appMatching.subTitle')}}</h3>
                <p class="msg" v-html="$t('appMatching.msg')"></p>
                <button @click="mainVisible=true" :class="{'msgEn':$i18n.locale=='en'}">{{$t('appMatching.btn')}}</button>
            </div>
        </div>
        <div class="main" v-show="mainVisible">
            <div class="bg">
                <p class="nameCn">{{$t('appMatching.intelligentMatch')}}</p>
                <p class="nameEn">Intelligent Matching</p>
            </div>
            <div class="contain">
                <el-steps :active="active" :space="220" align-center class="step">
                    <el-step :title="$t('appMatching.step1')">1</el-step>
                    <el-step :title="$t('appMatching.step2')">2</el-step>
                    <el-step :title="$t('appMatching.step3')">3</el-step>
                </el-steps>
                <el-form ref="form" :model="form" label-width="50px" class="form" v-show="active=='1'">
                    <div class="formItem">
                        <span class="label">
                            <el-checkbox v-model="form.SATChecked">SAT：</el-checkbox>
                        </span>
                        <el-input v-model="form.SAT" :placeholder="$t('appMatching.placeholderSAT')"></el-input>
                    </div>
                    <div class="formItem">
                        <span class="label">
                            <el-checkbox v-model="form.ACTChecked">ACT：</el-checkbox>
                        </span>
                        <el-input v-model="form.ACT" :placeholder="$t('appMatching.placeholderACT')"></el-input>
                    </div>
                    <el-divider></el-divider>
                    <div class="otherInfo">
                        <div class="left">
                            <div class="formItem">
                                <span class="label must">TOEFL：</span>
                                <el-input v-model="form.SAT" :placeholder="$t('appMatching.placeholderTOEFL')"></el-input>
                            </div>
                            <div class="formItem" v-for="(list,index) in form.myMajorList">
                                <span class="label must">{{$t('appMatching.majorText')}}{{index+1}}：</span>
                                <el-select v-model="form.SAT" :placeholder="$t('appMatching.placeholderSAT')">
                                    <el-option
                                    v-for="item in form.majorList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="list">
                                    </el-option>
                                </el-select>
                                <img :src="iconDelete" alt="" class="iconDelete" @click="delMajor(index)" v-if="index!=0">
                            </div>
                            <div class="addMoreOne" @click="addMajor">
                                <img :src="add" alt="error">{{$t('appMatching.addMajor')}}
                            </div>
                        </div>
                        <div class="right">
                            <div class="formItem">
                                <span class="label must">GPA：</span>
                                <el-input v-model="form.SAT" :placeholder="$t('appMatching.placeholderGPA')"></el-input>
                            </div>
                            <div class="formItem">
                                <span class="label must">SAT2：</span>
                                <div class="testType">
                                    <el-radio v-model="form.textType" label="1">{{$t('appMatching.haveTest')}}</el-radio>
                                    <el-radio v-model="form.textType" label="2">{{$t('appMatching.noTest')}}</el-radio>
                                </div>
                            </div>
                            <div class="formItem testedInfoList" v-show="form.textType=='1'">
                                <ul class="testedInfo">
                                    <li v-for="(list,index) in form.mySubjectList">
                                        <el-select v-model="form.subject" :placeholder="$t('appMatching.placeholderTest')">
                                            <el-option
                                            v-for="item in form.subjectList"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="list">
                                            </el-option>
                                        </el-select>
                                        <el-input v-model="form.grade" :placeholder="$t('appMatching.placeholderGrade')" class="grade"></el-input>
                                        <img :src="iconDelete" alt="" class="iconDelete" @click="delSubject(index)" v-if="index!=0">
                                    </li>
                                </ul>
                            </div>
                            <div class="addMoreOne" @click="addSubject" v-show="form.textType=='1'">
                                <img :src="add" alt="error">{{$t('appMatching.addSubject')}}
                            </div>
                        </div>
                    </div>
                </el-form>
                <el-form ref="form" :model="formOptional" label-width="50px" class="form formOptional" :class="{'enFormOptional':$i18n.locale=='en'}" v-show="active=='2'">
                    <div class="otherInfo">
                        <div class="left">
                            <div class="formItem">
                                <span class="label">{{$t('appMatching.preferencesIn')}}：</span>
                                <el-select v-model="form.preferencesIn" :placeholder="$t('appMatching.placeholder')">
                                    <el-option
                                    v-for="item in form.subjectList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="formOptional.preferencesIn">
                                    </el-option>
                                </el-select>
                            </div>
                            <div class="formItem">
                                <span class="label">{{$t('appMatching.tuitionFeeRange')}}：</span>
                                <el-select v-model="form.tuitionFeeRange" :placeholder="$t('appMatching.placeholder')">
                                    <el-option
                                    v-for="item in form.subjectList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="formOptional.scopeOfTuition">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="right">
                            <div class="formItem">
                                <span class="label">{{$t('appMatching.schoolType')}}：</span>
                                <el-select v-model="form.schoolType" :placeholder="$t('appMatching.placeholder')">
                                    <el-option
                                    v-for="item in form.subjectList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="formOptional.schoolType">
                                    </el-option>
                                </el-select>
                            </div>
                            <div class="formItem">
                                <span class="label">{{$t('appMatching.environment')}}：</span>
                                <el-select v-model="form.environment" :placeholder="$t('appMatching.placeholder')">
                                    <el-option
                                    v-for="item in form.subjectList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="formOptional.schoolenvironment">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                    </div> 
                </el-form>
                <div class="matchingResult" :class="{'enMatchingResult':$i18n.locale=='en'}" v-model="matchingResult" v-show="active=='3'">
                    <div class="dreamSchool item">
                        <div class="head">
                            <img :src="dreamSchoolIcon" alt="">
                            {{$t('appMatching.dreamSchool')}}
                        </div>
                        <div class="main">
                            <div class="title">
                                <span class="sort">{{$t('appMatching.order')}}</span>
                                <span class="name">{{$t('appMatching.school')}}</span>
                                <span class="rate">{{$t('appMatching.rate')}}</span>
                            </div>
                            <ul class="list">
                                <li v-for="(item,index) in matchingResult.dreamSchool">
                                    <span class="sort">{{index+1}}</span>
                                    <span class="name">{{item.name}}</span>
                                    <span class="rate">{{item.rate}}
                                        <i class="el-icon-arrow-right"></i>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="matchingSchool item">
                        <div class="head">
                            <img :src="matchingSchoolIcon" alt="">
                            {{$t('appMatching.matchingSchool')}}
                        </div>
                        <div class="main">
                            <div class="title">
                                <span class="sort">{{$t('appMatching.order')}}</span>
                                <span class="name">{{$t('appMatching.school')}}</span>
                                <span class="rate">{{$t('appMatching.rate')}}</span>
                            </div>
                            <ul class="list">
                                <li v-for="(item,index) in matchingResult.matchingSchool">
                                    <span class="sort">{{index+1}}</span>
                                    <span class="name">{{item.name}}</span>
                                    <span class="rate">{{item.rate}}
                                        <i class="el-icon-arrow-right"></i>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="safeSchool item">
                        <div class="head">
                            <img :src="safeSchoolIcon" alt="">
                            {{$t('appMatching.schoolSafe')}}
                        </div>
                        <div class="main">
                            <div class="title">
                                <span class="sort">{{$t('appMatching.order')}}</span>
                                <span class="name">{{$t('appMatching.school')}}</span>
                                <span class="rate">{{$t('appMatching.rate')}}</span>
                            </div>
                            <ul class="list">
                                <li v-for="(item,index) in matchingResult.safeSchool">
                                    <span class="sort">{{index+1}}</span>
                                    <span class="name">{{item.name}}</span>
                                    <span class="rate">{{item.rate}}
                                        <i class="el-icon-arrow-right"></i>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <el-button class="nextStep" @click="next" v-if="active!=3">{{active=="1"?$t('appMatching.nextStep'):$t('appMatching.intelligentMatch')}}</el-button>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import appHeader from "@/components/appHeader/appHeader";
    let self;
    export default{
        name: 'appMatching',
        data(){
            return{
                mainVisible:false,
                bg:require("img/appMatching/gxpp_bg.png"),
                add:require("img/appMatching/add.png"),
                dreamSchoolIcon:require("img/appMatching/mx.png"),
                matchingSchoolIcon:require("img/appMatching/pp.png"),
                safeSchoolIcon:require("img/appMatching/aq.png"),
                iconDelete:require("img/appMatching/delete.png"),
                active:1,
                form: {
                    SAT: '',
                    SATChecked: '',
                    ACT: '',
                    ACTChecked: '',
                    majorList:[
                        {
                            value: '选项4',
                            label: '龙须面'
                        }, 
                        {
                            value: '选项5',
                            label: '北京烤鸭'
                        }
                    ],
                    myMajorList:[null],
                    radio:'',
                    textType:"",
                    subject:"",
                    subjectList:[
                        {
                            value: '选项4',
                            label: '龙须面'
                        }, 
                        {
                            value: '选项5',
                            label: '北京烤鸭'
                        }
                    ],
                    mySubjectList:[null],
                    grade:""
                },
                formOptional:{
                    preferencesIn:"" ,
                    scopeOfTuition:"" ,
                    schoolType:"" ,
                    schoolenvironment :"" ,
                },
                // step 2
                preferencesIn :"" ,
                tuitionFeeRange :"" ,
                schoolType :"" ,
                environment :"" ,
                // end
                matchingResult:{
                    dreamSchool:[
                        {
                            name:"普林斯顿大学",
                            rate:"10.5%"
                        },
                        {
                            name:"哈佛大学",
                            rate:"9.1%"
                        },
                        {
                            name:"哥伦比亚大学",
                            rate:"8.8%"
                        },
                        {
                            name:"芝加哥大学",
                            rate:"7.5%"
                        },
                        {
                            name:"耶鲁大学",
                            rate:"7.4%"
                        },
                    ],
                    matchingSchool:[
                        {
                            name:"墨尔本大学",
                            rate:"99.9%"
                        },
                        {
                            name:"海德堡大学",
                            rate:"99.8%"
                        },
                        {
                            name:"科罗拉多大学",
                            rate:"96.2%"
                        },
                        {
                            name:"马里兰大学",
                            rate:"93.8%"
                        },
                        {
                            name:"加州大学",
                            rate:"89.9%"
                        }
                    ],
                    safeSchool:[
                        {
                            name:"麻省理工大学",
                            rate:"100%"
                        },
                        {
                            name:"南加州大学",
                            rate:"100%"
                        },
                        {
                            name:"密歇根大学",
                            rate:"100%"
                        },
                        {
                            name:"剑桥大学",
                            rate:"100%"
                        },
                        {
                            name:"威斯康星大学",
                            rate:"100%"
                        }
                    ],
                }
            }
        },
        methods: {
            addMajor(){//添加专业
                self.form.myMajorList.push(null);
            },
            delMajor(index){//删除专业
                self.form.myMajorList.splice(index,1);
            },
            addSubject(){//添加科目
                self.form.mySubjectList.push(null);
            },
            delSubject(index){//删除科目
                self.form.mySubjectList.splice(index,1);
            },
            next() {//下一步
                if (self.active < 3) self.active++;
            }
        },
        mounted(){
            self=this;
        },
        components:{
            "app-header":appHeader,
        }
    }

</script>
<style lang="scss">
    @import './appMatching.scss';
</style>