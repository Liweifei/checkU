import enLocale from 'element-ui/lib/locale/lang/en' //引入element语言包
const en={
  ...enLocale,//解构
  appHeader:{//头部导航
    logo:require("img/logoEn.png"),
    school:"School",
    highSchoolList:[
      {
          url:"/appHighSchool/universityLibrary",
          label:"School"
      },
      {
          url:"/appHighSchool/listOfUniversities",
          label:"Ranking"
      },
      {
          url:"/appHighSchool/optionalLibrary",
          label:"Majors"
      }
    ],
    activity:"Activities",
    matching:"Matching",
    wxLogin:"WeChat login"
  },
  appHome:{//首页
    searchTypeList:[
      {
          label:"All",
          value:"all"
      },
      {
          label:"School",
          value:"highSchool"
      },
      {
          label:"Major",
          value:"major"
      }
    ],
    placeholder:"enter a university, summer school, or activity",
    searchBoxText:"Search",
    news:"extracurricular activity",
    newAnnouncementList:[
      {
        label:"U.s.news 2019 college rankings released!",
        link:"http://www.sohu.com/a/252988474_372459"
        },
        {
            label:"School selection system meets big data, s…",
            link:"http://edu.sina.com.cn/a/2018-08-14/doc-ihhqtawy1049348.shtml"
        },
        {
            label:"What should heat grind mail notice? Prob…",
            link:"http://www.jyb.cn/rmtzgjyb/201903/t20190322_218943.html"
        },
        {
            label:"Sharing session on study abroad in the Un…",
            link:"https://www.jianshu.com/p/01ff2ec66f6d"
        },
        {
            label:"US STAR former ivy league admission offic…",
            link:"https://www.zhihu.com/question/68656031/answer/386135806"
        },
        {
            label:"2019 Australian elite university enrollment…",
            link:"http://edu.sina.com.cn/a/2018-08-23/doc-ihhzsnec5459989.shtml"
        },
    ],
    goOtherSysList:[
      {
          label:"School Information",
          link:"/appHighSchool/universityLibrary",
          img:require("img/yxk.jpg")
      },
      {
          label:"school matching system",
          link:"/appMatching",
          img:require("img/zxxt.jpg")
      }
    ],
    highSchool:"Hot ranking",
    subTitle:"",
    more:"view more rankings>>",
    attentionBtn:"Collect",
    attentionedBtn:"Collected",
    join:"Participants : ",
    qa:"Comments : ",
    alumniComments:"Latest Comments",
    commentOn:"commented on  ",
    publishIn:"Published in  ",
    viewCount:"Browse  ",
    unit:"  times",
    share:"share",
    readAll:"Read more",
    Packup:"Pack up",
    loadMore:"view more",
  },
  appHighSchool:{//高校
    tabs:[
      {
          label:"School",
          path:"/appHighSchool/universityLibrary",
          type:"/appHighSchool/universityLibrary",
      },
      {
          label:"Ranking",
          path:"/appHighSchool/listOfUniversities",
          type:"/appHighSchool/listOfUniversities",
      },
      {
          label:"Majors",
          path:"/appHighSchool/optionalLibrary",
          type:"/appHighSchool/optionalLibrary",
      }
    ],
    placeholder:"Please enter keywords"
  },
  universityLibrary:{//高校库
    area:"Area",
    areaList:[
      {
          label:"Total",
          value:""
      },
      {
          label:"US",
          value:"inland"
      },
      {
          label:"UK",
          value:"foreign"
      },
      {
          label:"Canada",
          value:"foreign"
      },
      {
          label:"Other",
          value:"foreign"
      },
      {
          label:"America",
          value:"foreign"
      },
      {
          label:"Europe",
          value:"foreign"
      },
      {
          label:"Asia",
          value:"foreign"
      },
      {
          label:"Oceania",
          value:"foreign"
      },
      {
          label:"Africa",
          value:"foreign"
      }
    ],
    type:"Sort",
    typeList:[
    //   {
    //       label:"All",
    //       value:""
    //   },
      {
          label:"University",
          value:"0"
      },
      {
          label:"College",
          value:"1"
      },
      {
          label:"Summer School",
          value:"2"
      },
    ],
    sortText:"Rank",
    sortList:[
        // {
        //     label:"Total",
        //     value:""
        // },
        {
            label:"Hot",
            value:"hot"
        },
        {
            label:"US News ",
            value:"usnew"
        },
        {
            label:"Word",
            value:"world"
        },
    ],
    total:"A total of",
    result:"results",
    sortNum:"Order",
    schoolBadge:"Logo",
    nameText:"Name",
    address:"Location",
    collection:"Collect",
  },
  schoolDetail:{//院校详情
    tabs:[
        {
            label:"Data",
            path:"/schoolDetail/schoolInfomation",
            type:"/schoolDetail/schoolInfomation",
        },
        {
            label:"Majors",
            path:"/schoolDetail/majorSetup",
            type:"/schoolDetail/majorSetup",
        },
        {
            label:"Comments",
            path:"/schoolDetail/alumniComments",
            type:"/schoolDetail/alumniComments",
        }
    ],
    Collect:"Collect",
    Collected:"Collected",
    commentText:"comments",
    share:"share by",
  },
  schoolInfomation:{//学校资料
    schoolrRanking:"School Ranking",
    usNews:"US NEWS",
    world:"World",
    hot:"Hot",
    schoolProfile:"School Profile",
    information:"Information",
    general:"General Information",
    sort:"Ranking",
    tuition:"Fee",
    type:"Category",
    address:"Location",
    website:"Website",
    typePublic:"plublic",
    typePrivate:"private",
    teachingInformation:"Teaching Information",
    studentStaffRatio:"Teacher/Student",
    professionalSdvantage:"Advantage",
    maleFemaleRatio:"Male/Female",
    applicationInformation:"Application  Information",
    other:"Application/Acceptance/Enrollment",
    feedback:"Feedback by Students",
    environment:"Environment",
    teachership:"Faculty",
    hardwareFacility:"Facilities",
    activity:"Activities",
    alumniComments:"Comments by Alumni",
    viewCount:"Browse  ",
    unit:"  times",
    loadMore:"view more",
    te:['poor','disappointment','ordinary','good','very good'],
  },
  majorSetup:{//专业设置
    placeholder:"Search the major",
    majorClassification:"Categories",
    majorList:[
        {
            label:"All",
            value:""
        },
                                    
        {
            label:"Business",
            value:"Business"
        },
        {
            label:"Engineering",
            value:"Engineering"
        },
        {
            label:"Science",
            value:"Science"
        },
        {
            label:"Social Science",
            value:"SocialScience"
        }
    ],
    ranking:"Ranking",
    sortTypeList:[
        {
            label:"US NEWS",
            value:"US"
        },
        {
            label:"World",
            value:"World"
        }
    ],
    total:"There are  ",
    result:"  Majors",
    order:"Order",
    major:"Majors",
    eductionalSystme:"Length of school",
    sortUs:"Ranking on<br/>US NEWS",
    sortWorld:"Ranking on<br/>World",
  },
  alumniComments:{//校友评论
    total:"There were",
    result:"comments",
    sortTypeList:[
        {
            label:"Hot",
            value:"hot"
        },
        {
            label:"Time",
            value:"time"
        },
    ],
    alumniComments:"Comments by Alumni",
    publishIn:"Published in  ",
    viewCount:"Browse  ",
    unit:"  times",
    share:"share",
    readAll:"Read more",
    Packup:"Pack up",
    loadMore:"view more",
  },
  listOfUniversities:{//高校榜单
    title:"Ranking",
    introduce:"Based on Check U's understanding of School, the education evaluation lists of School and major are gathered",
    listTitle:["US NEWS","World","Hot","Most Competitive","Applicants Ranking","Acceptance Rate","Male/Female Ratio","Faculty Ranking","School Environment"],
    tabs0:"University",
    tabs1:"College",
    lookAll:"view all  >",
  },
  optionalLibrary:{//专业库
    title:"Majors",
    list:[
      {
          title:"Business",
          arr:["Accounting and finance","Economics","Business and management","Hotel tourism management"]
      },
      {
          title:"Engineering",
          arr:[
              "The information system","Computer engineering","Electrical/electronic/communication engineering","Mechanical systems","Aerospace engineering","Materials engineering","Civil engineering"
              ,"Chemical engineering","Environment/sanitation engineering","Industrial/manufacturing/systems engineering","Bioengineering/agricultural engineering","Biomedicine/bioengineering","Nuclear engineering"
              ,"Petroleum engineering","Information system management"
          ],
      },
      {
          title:"Science",
          arr:[
              "Chemical","Biological","Physical","Geography and environment","Mathematics","Earth and ocean science","Agriculture and forestry"
          ],
      },
      {
          title:"Social Science",
          arr:[
              "Pharmacy and pharmacology","Anatomic biology","Drama and dance",
              "Media, film and television","Journalism, publishing and public relations",
              "Sociology","Social work"
              ,"Social policy","Philosophy","Political science","Anthropology","Pedagogy","Psychology"
              ,"The law","Criminology","Architecture","Architecture and town planning","Modern languages and linguistics",
              "English and creation"
              ,"Classical literature","History","History and art history","Design and technology","Art and design","Fashion and textiles"
              ,"American studies","Religious studies and theology","Health professional","Veterinary medicine","Dental","Nursing and midwifery"
          ],
      }
    ]
  },
  appActivity:{//活动
    placeholder:"Please enter keywords",
    viewText:"Click to view",
    typeList:[
      {
          img:require("img/appActivity/hd01.png"),
          label:"Subject",
          url:"/activityMain/disciplineCompetition"
      },
      {
          img:require("img/appActivity/hd02.png"),
          label:"Volunteer",
          url:"/activityMain/voluntaryService"
      },
      {
          img:require("img/appActivity/hd03.png"),
          label:"Scientific Research",
          url:"/activityMain/scientificProject"
      },
      {
          img:require("img/appActivity/hd04.png"),
          label:"Comprehensive",
          url:"/activityMain/disciplineCompetition4"
      },
    ]
  },
  activityMain:{//活动
    placeholder:"Please enter keywords",
    tabs:[
        {
            label:"Subject",
            path:"/activityMain/disciplineCompetition",
            type:"/activityMain/disciplineCompetition",
        },
        {
            label:"Volunteer",
            path:"/activityMain/voluntaryService",
            type:"/activityMain/voluntaryService",
        },
        {
            label:"Scientific Research",
            path:"/activityMain/scientificProject",
            type:"/activityMain/scientificProject",
        },
        {
            label:"Comprehensive",
            path:"/activityMain/disciplineCompetition4",
            type:"/activityMain/disciplineCompetition4",
        },
    ]
  },
  disciplineCompetition:{//学科竞赛
    area:"Region",
    areaList:[
      {
          label:"All",
          value:"2"
      },
      {
          label:"Home",
          value:"3"
      },
      {
          label:"Overseas",
          value:"4"
      }
    ],
    subject:"Subject",
    subjectList:[
      {
          label:"All",
          value:"1"
      },
      {
          label:"Math",
          value:"2"
      },
      {
          label:"Physics",
          value:"3"
      },
      {
          label:"Chemical",
          value:"4"
      },
      {
          label:"Biology",
          value:"5"
      }
    ],
    total:"A total of  ",
    result:"  results",
    order:"Order",
    activityName:"Name of activity",
    attention:"Collect",
  },
  voluntaryService:{//志愿服务
    area:"Region",
    areaList:[
      {
          label:"All",
          value:""
      },
      {
          label:"Home",
          value:"Home"
      },
      {
          label:"Overseas",
          value:""
      }
    ],
    subject:"type",
    subjectList:[
      {
          label:"All",
          value:""
      },
      {
          label:"Support the poor",
          value:"Support"
      },
      {
          label:"Community building",
          value:"Community"
      },
      {
          label:" Environmental protection",
          value:"Environmental"
      },
      {
        label:"Mega-events",
        value:"Mega"
      },
      {
          label:"Succor",
          value:"Succor"
      },
      {
          label:"Overseas service",
          value:"Overseas"
      },
      {
          label:"other",
          value:"other" 
      }
    ],
    total:"A total of  ",
    result:"  results",
    order:"Order",
    activityName:"Name of activity",
    attention:"Collect",
  },
  scientificProject:{//科研项目
    area:"Region",
    areaList:[
      {
          label:"All",
          value:""
      },
      {
          label:"Home",
          value:"Home"
      },
      {
          label:"Overseas",
          value:""
      }
    ],
    subject:"type",
    subjectList:[
      {
          label:"All",
          value:""
      },
      {
          label:"Winter vacation",
          value:"Winter"
      },
      {
          label:"Summer vacation",
          value:"Summer"
      }
    ],
    total:"A total of  ",
    result:"  results",
    order:"Order",
    activityName:"Name of activity",
    attention:"Collect",
  },
  activityDetail:{//学科竞赛/志愿服务/科研项目 详情
    Collect:"Collect",
    Collected:"Collected",
    commentText:"comments",
    introduction:"Activity Introduction",
    activityTime:"Activity time",
    applyTime:"Application Period",
    address:"Registration address",
    applyType:"Registration",
    website:"Activity website",
    PlanRecruit:"Planned recruitment",
    serviceObj:"Service object",
    Recruited:"Have to recruit",
    activityDate:"Date",
    jobDescription:"Job description",
    releaseDate:"Date of issue",
    PostConditions:"Position conditions",
    volunteerProtection:"Volunteer protection",
    addImgText:"pictures",
    studentCommentText:"Comment",
    viewCount:"Browse  ",
    unit:"  times",
    noMore:"no more",
    placeholder:"Share your experience of this activity"
  },
  appMatching:{//匹配
    title:"Intelligent matching system",
    subTitle:"(Schools in USA only)",
    msg:"The system will auto-match schools for you based on the basic<br/>information you fill in next",
    btn:"click to match (U.S. Undergraduate)",
    step1:"Required Field",
    step2:"Optional Field",
    step3:"Consequence",
    placeholderSAT:"Fill in your SAT score",
    placeholderACT:"Fill in your ACT score",
    placeholderTOEFL:"Fill in your TOEFL score",
    addMajor:"Add Major",
    majorText:"Major",
    placeholderGPA:"fill in your GPA on a percentage scale",
    placeholderMajor:"fill in your major",
    haveTest:"Exam taken",
    noTest:"Exam not taken",
    placeholderTest:"Please choose your subject",
    placeholderGrade:"Fill in the score",
    addSubject:"Add Subject",
    preferencesIn:"Area Preferred",
    tuitionFeeRange:"Fee Range",
    schoolType:"Category",
    environment:"Environment",
    placeholder:"Please Choose",
    dreamSchool:"Dream",
    order:"No.",
    school:"School",
    rate:"matched-degree",
    matchingSchool:"Matched",
    schoolSafe:"Matched Perfectly",
    majorList:[
        {
            value: '10',
            label: 'accounting'
        }, 
        {
            value: '21',
            label: 'engineering'
        }
    ],
    subjectList:[
        {
            value: 'math',
            label: 'math'
        }, 
        {
            value: 'science',
            label: 'science'
        }
    ],
    nextStep:"Next",
    intelligentMatch :"Intelligent Matching",
  },
  appCommentTool:{//评论组件
    placeholder:"Share your experience of this school.",
    addImgText:"pictures",
    commentText:"Comment",
    totalReplyText:"All Replies",
    replyText:"Reply",
  },
  notFound:{//404
    msg:"Sorry, the page was not found.",
    reload:"Try to refresh",
    back:"Previous Page",
  },
  serverError:{//服务器 500
    msg:"Sorry, we are having some problems with our server.",
    back:"Previous Page",
    backHome:"Home Page",
  },
  comingSoon:{//未建设页面
    msg:"The page is under construction, so stay tuned!",
  }
}
export default en;