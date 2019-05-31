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
                                <el-input v-model="form.TOEFL" :placeholder="$t('appMatching.placeholderTOEFL')"></el-input>
                            </div>
                            <div class="formItem" v-for="(list,index) in form.myMajorList">
                                <span class="label must">{{$t('appMatching.majorText')}}{{index+1}}：</span>
                                <el-select v-model="form.myMajorList[index]" :placeholder="$t('appMatching.placeholderMajor')">
                                    <el-option
                                    v-for="item in $t('appMatching.majorList')"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
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
                                <el-input v-model="form.GPA" :placeholder="$t('appMatching.placeholderGPA')"></el-input>
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
                                        <el-select v-model="form.mySubjectList[index].select" :placeholder="$t('appMatching.placeholderTest')">
                                            <el-option
                                            v-for="item in $t('appMatching.subjectList')"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                            </el-option>
                                        </el-select>
                                        <el-input v-model="form.mySubjectList[index].score" :placeholder="$t('appMatching.placeholderGrade')" class="grade"></el-input>
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
                regNumber:/^[0-9]*$/,
                form: {
                    SAT: '',
                    SATChecked: '',
                    ACT: '',
                    ACTChecked: '',
                    TOEFL: '',
                    GPA: '',
                    myMajorList:[null],
                    radio:'',
                    textType:"",
                    subject:"",
                    mySubjectList:[{select:null,score:null}],
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
                        // {
                        //     name:"普林斯顿大学",
                        //     rate:"10.5%"
                        // }
                    ],
                    matchingSchool:[
                        // {
                        //     name:"墨尔本大学",
                        //     rate:"99.9%"
                        // }
                    ],
                    safeSchool:[
                        // {
                        //     name:"麻省理工大学",
                        //     rate:"100%"
                        // }
                    ],
                }
            }
        },
        methods: {
            addMajor(){//添加专业
                self.form.myMajorList.push(null);
                console.log(self.form.myMajorList)
            },
            delMajor(index){//删除专业
                self.form.myMajorList.splice(index,1);
            },
            addSubject(){//添加科目
                self.form.mySubjectList.push({select:null,score:null});
            },
            delSubject(index){//删除科目
                self.form.mySubjectList.splice(index,1);
            },
            checkMust(){//验证必填项
                if(self.form.SATChecked && !self.form.SAT){
                    self.$message({
                        message: self.$i18n.locale=="en"?"Please fill in your SAT score":"请填写您的SAT总分",
                        type: 'warning'
                    });
                    return false;
                }else{
                    if(!self.regNumber.test(self.form.SAT)){
                        self.$message({
                            message: self.$i18n.locale=="en"?"Please fill in your numerical SAT score":"请填写数字类型的SAT总分",
                            type: 'warning'
                        });
                        return false;
                    }
                }
                if(self.form.ACTChecked && !self.form.ACT){
                    self.$message({
                        message: self.$i18n.locale=="en"?"Please fill in your ACT score":"请填写您的ACT总分",
                        type: 'warning'
                    });
                    return false;
                }else{
                    if(!self.regNumber.test(self.form.ACT)){
                        self.$message({
                            message: self.$i18n.locale=="en"?"Please fill in the numerical ACT total score":"请填写数字类型的ACT总分",
                            type: 'warning'
                        });
                        return false;
                    }
                }
                if(!self.form.TOEFL){
                    self.$message({
                        message: self.$i18n.locale=="en"?"Please fill in your TOEFL score":"请填写您的TOEFL分数",
                        type: 'warning'
                    });
                    return false;
                }else{
                    if(!self.regNumber.test(self.form.TOEFL)){
                        self.$message({
                            message: self.$i18n.locale=="en"?"Please fill in the numerical TOEFL score":"请填写数字类型的TOEFL分数",
                            type: 'warning'
                        });
                        return false;
                    }
                }
                if(!self.form.GPA){
                    self.$message({
                        message: self.$i18n.locale=="en"?"Please fill in your GPA score":"请填写您的GPA分数",
                        type: 'warning'
                    });
                    return false;
                }else{
                    if(!self.regNumber.test(self.form.GPA)){
                        self.$message({
                            message: self.$i18n.locale=="en"?"Please fill in your numerical GPA":"请填写数字类型的GPA分数",
                            type: 'warning'
                        });
                        return false;
                    }
                }
                let myMajorListIo=true;
                self.form.myMajorList.forEach(element => {
                    console.log(element)
                    if(!element){
                        myMajorListIo=false;
                        return;
                    }
                });
                if(!myMajorListIo){
                    self.$message({
                        message: self.$i18n.locale=="en"?"Please fill in your major":"请填写您的专业",
                        type: 'warning'
                    });
                    return false;
                }
                if(!self.form.textType){
                    self.$message({
                        message: self.$i18n.locale=="en"?"Please choose your SAT2":"请选择SAT2",
                        type: 'warning'
                    });
                    return false;
                }else if(self.form.textType=="1"){
                    let mySubjectListIo=true;
                    let msg="";
                    self.form.mySubjectList.forEach(element => {
                        if(!element.select){
                            mySubjectListIo=false;
                            msg=self.$i18n.locale=="en"?"Please choose your subject":"请选择考试科目";
                            return;
                        }else if(!element.score){
                            mySubjectListIo=false;
                            msg=self.$i18n.locale=="en"?"Please fill in the test subject score":"请填写考试科目分数";
                            return;
                        }else{
                            if(!self.regNumber.test(element.score)){
                                mySubjectListIo=false;
                                msg=self.$i18n.locale=="en"?"Please fill in the numerical subject score":"请填写数字类型的科目分数";
                                return;
                            }
                        }
                    });
                    if(!mySubjectListIo){
                        self.$message({
                            message: msg,
                            type: 'warning'
                        });
                        return false;
                    }
                }
                return true;
            },
            next() {//下一步
                if(self.active==1){
                    if(!self.checkMust())return;
                }
                if(self.active==2){
                    self.getMatching().then(()=>{
                        self.active++;
                    });
                }else{
                    self.active++;
                }
            },
            getMatching(){//智能匹配
                return new Promise((resolve,reject)=>{
                    self.$http.get(self.$api+'/school/getMatching', {
                        params:{
                            language:self.$i18n.locale,
                            act:self.form.ACT?self.form.ACT:1,
                            sat:self.form.SAT?self.form.SAT:1,
                            toefl:self.form.TOEFL,
                        }
                    }).then(function (response) {
                        if(!!response){
                            if(response.data.code=="200"){
                                self.matchingResult.dreamSchool=[];
                                self.matchingResult.matchingSchool=[];
                                self.matchingResult.safeSchool=[];
                                let res=response.data.data;
                                self.matchingResult.dreamSchool=res.getMatchDream.map((item)=>{
                                    return {name:item.name,rate:"100%"}
                                })
                                self.matchingResult.matchingSchool=res.getMatching.map((item)=>{
                                    return {name:item.name,rate:"100%"}
                                })
                                self.matchingResult.safeSchool=res.getMatchSafe.map((item)=>{
                                    return {name:item.name,rate:"100%"}
                                })
                                resolve();
                            }
                        }
                    }).catch(function (error) {
                        console.log(error);
                    });
                })
            },
        },
        created(){
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