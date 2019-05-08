import enLocale from 'element-ui/lib/locale/lang/en' //引入element语言包
const en={
  ...enLocale,//解构
  appHeader:{//头部导航
    school:"School",
    highSchoolList:[
      {
          url:"/appHighSchool/universityLibrary",
          label:"School"
      },
      {
          url:"/appHighSchool/listOfUniversities",
          label:"Lists"
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
    placeholder:"Search for interested information",
    searchBoxText:"Search",
    news:"News",
    newAnnouncementList:[
      "U.s.news 2019 college rankings released!",
      "School selection system meets big data, s…",
      "What should heat grind mail notice? Prob…",
      "Sharing session on study abroad in the Un…",
      "US STAR former ivy league admission offic…",
      "2019 Australian elite university enrollment…",
    ],
    goOtherSysList:[
      {
          label:"School Information",
          img:require("img/yxk.jpg")
      },
      {
          label:"Select School",
          img:require("img/zxxt.jpg")
      }
    ],
    highSchool:"School",
    subTitle:"（Hot recommendation）",
    more:"view more>>",
    attentionBtn:"Collect",
    join:"Participants : ",
    qa:"Comments : ",
    alumniComments:"Hot Comments",
    commentOn:"commented on  ",
    publishIn:"Published in  ",
    viewCount:"Browse  ",
    unit:"  times",
    share:"share",
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
          label:"Lists",
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
      {
          label:"All",
          value:""
      },
      {
          label:"University",
          value:"math"
      },
      {
          label:"College",
          value:"physics"
      },
      {
          label:"Summer School",
          value:"chemistry"
      },
    ],
    sortText:"Rank",
    sortList:[
      {
          label:"Hot",
          value:""
      },
      {
          label:"US News ",
          value:"physics"
      },
      {
          label:"Word",
          value:"chemistry"
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
  listOfUniversities:{//高校榜单
    title:"Lists",
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
  disciplineCompetition:{//学科竞赛
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
    subject:"Subject",
    subjectList:[
      {
          label:"All",
          value:""
      },
      {
          label:"Math",
          value:"Math"
      },
      {
          label:"Physics",
          value:"Physics"
      },
      {
          label:"Chemical",
          value:"Chemical"
      },
      {
          label:"Biology",
          value:"Biology"
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
    subTitle:"(Study in USA version)",
    msg:"We will match school for you according to the basic<br/>information you fill in next",
    btn:"Click to start match（U.S. Undergraduate）",
    step1:"Required Field",
    step2:"Optional Field",
    step3:"Consequence",
    placeholderSAT:"Fill in your SAT score",
    placeholderACT:"Fill in your ACT score",
    placeholderTOEFL:"Fill in your TOEFL score",
    addMajor:"Add Major",
    majorText:"Major",
    placeholderGPA:"Fill in your GPA score",
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
    nextStep:"Next",
    intelligentMatch :"Intelligent Matching",
  },
}
export default en;