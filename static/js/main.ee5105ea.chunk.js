(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,A,t){},function(e,A,t){},function(e,A,t){},,function(e,A,t){},function(e,A,t){},,,,,function(e,A,t){},function(e,A,t){},function(e,A,t){"use strict";t.r(A);var a=t(1),r=t.n(a),s=t(11),n=t.n(s),i=(t(16),t(17),t(2)),o=t(4),c=t(5),l=t(3),g=(t(18),t(0)),d=function(e){Object(c.a)(t,e);var A=Object(l.a)(t);function t(){return Object(i.a)(this,t),A.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(g.jsxs)("div",{id:0===this.props.top?"navBar":"navBarColored",children:[Object(g.jsx)("div",{id:"leftSide",children:Object(g.jsx)("a",{href:"#banner",id:"nameLink",children:"Max De George"})}),Object(g.jsx)("div",{id:"rightSide",children:Object(g.jsxs)("div",{id:"links",children:[Object(g.jsx)("a",{href:"#about",className:"link",children:"About"}),Object(g.jsx)("a",{href:"#experience",className:"link",children:"Experience"}),Object(g.jsx)("a",{href:"#skills",className:"link",children:"Skills"}),Object(g.jsx)("a",{href:"#projects",className:"link",children:"Projects"}),Object(g.jsx)("a",{href:"#contact",className:"link",children:"Contact"})]})})]})}}]),t}(r.a.Component),p=(t(20),t(21),t(6)),h=t.n(p),m=function(e){Object(c.a)(t,e);var A=Object(l.a)(t);function t(){return Object(i.a)(this,t),A.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(g.jsx)(h.a,{bottom:!0,children:Object(g.jsxs)("div",{className:"expBox",children:[Object(g.jsx)("h3",{className:"expTitle",children:this.props.title}),Object(g.jsx)("h6",{className:"expDate",children:this.props.date}),Object(g.jsxs)("div",{className:"expRole",children:[Object(g.jsxs)("h4",{className:"expPrimTitle",children:[this.props.primaryRoleTitle,":"]}),Object(g.jsx)("p",{className:"expPrim",children:this.props.primaryRole})]}),this.props.secondaryRole&&this.props.secondaryRoleTitle?Object(g.jsxs)("div",{className:"expRole",children:[Object(g.jsxs)("h4",{className:"expSecTitle",children:[this.props.secondaryRoleTitle,":"]}),Object(g.jsx)("p",{className:"expSec",children:this.props.secondaryRole})]}):null,Object(g.jsx)("div",{className:"expDescSec",children:Object(g.jsxs)("p",{className:"expDesc",children:[Object(g.jsx)("span",{className:"expDescTitle",children:"Description:"})," ",this.props.description]})})]})})}}]),t}(r.a.Component),B=(t(26),function(e){Object(c.a)(t,e);var A=Object(l.a)(t);function t(){return Object(i.a)(this,t),A.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(g.jsx)(h.a,{bottom:!0,children:Object(g.jsxs)("div",{className:"skillBox",children:[Object(g.jsx)("img",{src:this.props.src,className:"skillImage",alt:this.props.name}),Object(g.jsx)("h4",{className:"skillName",children:this.props.name}),Object(g.jsxs)("h5",{className:"skillTime",children:["Time known: ",this.props.time]}),Object(g.jsxs)("h5",{className:"skillProf",children:["Skill Level: ",this.props.prof]})]})})}}]),t}(r.a.Component)),C=(t(27),function(e){Object(c.a)(t,e);var A=Object(l.a)(t);function t(){var e;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=A.call.apply(A,[this].concat(r))).generateBox=function(){return e.props.left,Object(g.jsx)("div",{className:"projectBox",children:Object(g.jsxs)("div",{className:"projectDetails",children:[Object(g.jsx)("h3",{className:"projectTitle",children:e.props.title}),Object(g.jsx)("h4",{className:"projectType",children:e.props.type}),Object(g.jsxs)("h5",{className:"projectLang",children:["Language(s): ",e.props.languages]}),Object(g.jsx)("p",{className:"projectDesc",children:e.props.description})]})})},e}return Object(o.a)(t,[{key:"render",value:function(){return Object(g.jsx)(h.a,{bottom:!0,children:this.generateBox()})}}]),t}(r.a.Component)),j=t.p+"static/media/degeorge_max.a9190167.pdf",w=t.p+"static/media/itchio.3801a82e.png",b=t.p+"static/media/developer.2ad7acb9.png",u=t.p+"static/media/css3.8e077638.png",Q=t.p+"static/media/js.8974df6a.png",D=t.p+"static/media/react.add74742.svg",f=t.p+"static/media/Csharp.e0956945.png",x=t.p+"static/media/cpp.053a898d.png",E=t.p+"static/media/java.953a3b05.png",O=t.p+"static/media/ruby.0b422d19.png",v=t.p+"static/media/swift.86cec581.png",y=t.p+"static/media/vs.7a3baea7.png",I=t.p+"static/media/vscode.3721028f.png",M=t.p+"static/media/xcode.d4373498.png",k=t.p+"static/media/unity.b709b065.png",Y=function(e){Object(c.a)(t,e);var A=Object(l.a)(t);function t(e){var a;return Object(i.a)(this,t),(a=A.call(this,e)).updateScroll=function(e){var A=e.srcElement.scrollTop;a.setState({scrollHeight:A})},a.onChange=function(e,A){"name"===e?(a.setState({name:A.target.value,buttonText:"Send"}),a.name.current.style.borderColor="#252525"):"email"===e?(a.setState({email:A.target.value,buttonText:"Send"}),a.email.current.style.borderColor="#252525"):(a.setState({message:A.target.value,buttonText:"Send"}),a.message.current.style.borderColor="#252525")},a.validateEmail=function(){return!(!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(a.state.email)||""===a.state.email)||(a.email.current.style.borderColor="#FF0000",!1)},a.validateName=function(){return""!==a.state.name||(a.name.current.style.borderColor="#FF0000",!1)},a.validateMessage=function(){return""!==a.state.message||(a.message.current.style.borderColor="#FF0000",!1)},a.validateSubmit=function(){var e=a.validateEmail(),A=a.validateName(),t=a.validateMessage();return!!(e&&A&&t)},a.sendEmail=function(e){if(a.validateSubmit()){a.setState({buttonText:"Sending..."});a.sendFeedback("portfolio_contact",{message_html:a.state.message,from_name:a.state.name,reply_to:a.state.email})}},a.state={scrollHeight:0,buttonText:"Send",name:"",email:"",message:""},a.name=r.a.createRef(),a.email=r.a.createRef(),a.message=r.a.createRef(),a}return Object(o.a)(t,[{key:"componentDidMount",value:function(){document.querySelector("#content").addEventListener("scroll",this.updateScroll)}},{key:"render",value:function(){return Object(g.jsxs)(a.Fragment,{children:[Object(g.jsx)(d,{top:this.state.scrollHeight}),Object(g.jsxs)("article",{id:"content",children:[Object(g.jsxs)("section",{id:"banner",children:[Object(g.jsxs)("div",{id:"leftBanner",children:[Object(g.jsx)("h1",{id:"name",children:"Max De George"}),Object(g.jsx)("h2",{className:"job",children:"Web Developer"}),Object(g.jsx)("h2",{className:"job",children:"& Game Programmer"})]}),Object(g.jsx)("div",{id:"rightBanner",children:Object(g.jsx)("img",{src:b,alt:"Max De George"})})]}),Object(g.jsx)("section",{id:"about",children:Object(g.jsxs)(h.a,{bottom:!0,children:[Object(g.jsx)("div",{className:"sectionHeader",children:"About"}),Object(g.jsxs)("p",{id:"bio",children:["Welcome! My name's Max De George and I'm a Front-End Web Developer and Game Programmer. I currently work as a CRM Solution Developer in Microsoft Dynamics 365 and Power Platform. I truly enjoy it, and through this career field I've learned more about what it means to be a developer and how I can work on improving my skillset. I graduated from the Rochester Institute of Technology with a B.S. in Game Design & Development along with a minor in Entrepreneurship. I'm from Long Island, New York, and some of my hobbies include playing music (bass, upright bass, and guitar), playing board games, and hanging out with my friends. I aspire to combine innovation and entertainment into one, so that I help not only to forward technology, but also help create something that others can enjoy. That's enough about me, onto the important information! (If you're looking for just a resume, please click ",Object(g.jsx)("a",{href:j,rel:"noopener noreferrer",target:"_blank",children:"here"}),")"]})]})}),Object(g.jsx)("section",{id:"experience",children:Object(g.jsxs)(h.a,{bottom:!0,children:[Object(g.jsx)("div",{className:"sectionHeader",children:"Experience"}),Object(g.jsxs)("div",{id:"experienceContent",children:[Object(g.jsx)(m,{title:"Rochester Institute of Technology",primaryRoleTitle:"Major",primaryRole:"Game Design & Development",secondaryRoleTitle:"Minor",secondaryRole:"Entrepreneurship",date:"August 2016 - December 2020",description:"B.S. in Game Design & Development and minor in Entrepreneurship."}),Object(g.jsx)(m,{title:"Avanade",primaryRoleTitle:"Role",primaryRole:"CRM Solution Developer",date:"April 2021 - Current",description:"Full-time Microsoft Power Platform and D365 Developer working on a variety of projects ranging from D365 Field Service integrations,  custom web applications for product rentals, SAP CPQ configurable product creation, and Custom Visuals for PowerBI."}),Object(g.jsx)(m,{title:"Retail Business Services",primaryRoleTitle:"Role",primaryRole:"Front-End Web Developer Co-op",date:"June 2019 - December 2019 / January 2021 - April 2021",description:"Worked as a front-end web developer creating internal applications for Ahold Delhaize and its brands. Through this cooperative education I learned more about the front-end environment and growing proficient in React/React-Native."}),Object(g.jsx)(m,{title:"Northridge Church",primaryRoleTitle:"Role",primaryRole:"Full Stack Web Developer Co-op",date:"August 2018 - December 2018",description:"Worked as a full stack developer for Northridge Church. Was tasked with creating a time management application, using Ruby and Ruby on Rails as the language for the task, as well as PostgreSQL as the database. Learned how to operate on my own and find solutions to problems when no one else was around to help."}),Object(g.jsx)(m,{title:"Cru International Headquarters",primaryRoleTitle:"Role",primaryRole:"Full Stack Web Developer Intern",date:"June 2018 - July 2018",description:"Worked as a full stack developer for Cru Headquarters. Along with the other interns, we were told to create a prayer request application that could be used on the phone. Used Ruby and Ruby on Rails on the web for a quick prototyping of the project during the internship. Learned all about team management and how to openly communicate about problems and blockers, and how to get around them."})]})]})}),Object(g.jsx)("section",{id:"skills",children:Object(g.jsxs)(h.a,{bottom:!0,children:[Object(g.jsx)("div",{className:"sectionHeader",children:"Skills"}),Object(g.jsxs)("section",{id:"languages",children:[Object(g.jsx)("h3",{className:"skillSectionTitle",children:"Languages"}),Object(g.jsxs)("div",{className:"listLayout",children:[Object(g.jsx)(B,{src:"data:image/png;base64,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",name:"HTML",time:"8 years",prof:"Experienced (4)"}),Object(g.jsx)(B,{src:u,name:"CSS",time:"8 years",prof:"Experienced (4)"}),Object(g.jsx)(B,{src:Q,name:"JavaScript",time:"8 years",prof:"Experienced (4)"}),Object(g.jsx)(B,{src:D,name:"React",time:"6 months",prof:"Experienced (4)"}),Object(g.jsx)(B,{src:D,name:"React Native",time:"3 months",prof:"Proficient (3)"}),Object(g.jsx)(B,{src:f,name:"C#",time:"4 years",prof:"Proficient (3)"}),Object(g.jsx)(B,{src:x,name:"C++",time:"2 years",prof:"Proficient (3)"}),Object(g.jsx)(B,{src:E,name:"Java",time:"6 years",prof:"Capable (2)"}),Object(g.jsx)(B,{src:O,name:"Ruby",time:"2 years",prof:"Capable (2)"}),Object(g.jsx)(B,{src:v,name:"Swift",time:"1 years",prof:"Novice (1)"})]})]}),Object(g.jsxs)("section",{id:"Software",children:[Object(g.jsx)("h3",{className:"skillSectionTitle",children:"Software"}),Object(g.jsxs)("div",{className:"listLayout",children:[Object(g.jsx)(B,{src:I,name:"VS Code",time:"3 years",prof:"Experienced (4)"}),Object(g.jsx)(B,{src:k,name:"Unity",time:"4 years",prof:"Experienced (4)"}),Object(g.jsx)(B,{src:y,name:"Visual Studio",time:"4 years",prof:"Proficient (3)"}),Object(g.jsx)(B,{src:M,name:"Xcode",time:"1 years",prof:"Capable (2)"})]})]})]})}),Object(g.jsxs)("section",{id:"projects",children:[Object(g.jsx)("div",{className:"sectionHeader",children:"Projects"}),Object(g.jsx)(C,{title:"Budget App",left:!0,type:"Mobile App",languages:"C#",description:"Built using React Native, Typescript, and Supabase, the budget app was made to replace a spreadsheet used to keep a rolling log of all income and expenses. The app keeps track of transactions by category, creates breakdowns of expenses, highlights details through graphs and visuals, and allows for quick and easy addition of transactions."}),Object(g.jsx)(C,{title:"Snoverload",left:!1,type:"Mobile Game",languages:"C#",description:"Snoveload is an infinite runner app developed for iOS and Android using Unity. Originally prototyped in the spring of 2019, Snoverload was released in the winter of 2020 after the formation of a team and was the first game released by Ardin Interactive."}),Object(g.jsx)(C,{title:"lunchbox Store Manager App",left:!0,type:"Mobile Application",languages:"JavaScript (React Native)",description:"The lunchbox Store Manager App was built in React Native and released for internal use for lunchbox, a POC from Retail Business Services. The app manages store inventory, reordering, store history, and product removal."}),Object(g.jsx)(C,{title:"Career Pathing",left:!1,type:"Web Application",languages:"HTML, CSS, JavaScript (React)",description:"Career Pathing is an internal tool used by Retail Business Services to allow employees of the company to determine the preferred career path that they would like to take to get from their current role to their desired role. "}),Object(g.jsx)(C,{title:"Daily Goals",left:!1,type:"Web Application",languages:"HTML, CSS, JavaScript, Ruby",description:"Daily Goals is a time tracking web application designed for Northridge Church to keep track of employees' hours spent on tasks to determine where they are being productive or wasteful. The app tracks hours, auto generates tasks created by the user, and breaks down stats for the user and supervisors to better understand the hours dedicated to different fields and departments."}),Object(g.jsx)(C,{title:"E.C.H.O",left:!0,type:"Computer Game",languages:"C#",description:"E.C.H.O was the product of the 72 hour Music Game Jam in which we had to design and build a game focused on sound and music. Our team of three designed a game that relied on proximity of sound and volume of sound to traverse levels in a puzzle based design. Our team removed almost all visuals to force the player to rely on only sound alone to solve puzzles, which also made the game handicap friendly for those who are visually handicapped."})]}),Object(g.jsxs)("footer",{id:"footer",children:[Object(g.jsx)("h3",{className:"sectionHeader",children:"Social Media"}),Object(g.jsxs)("div",{id:"socialList",children:[Object(g.jsx)("a",{href:"https://github.com/MaxDeGeo",rel:"noopener noreferrer",target:"_blank",children:Object(g.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERCMUIwQTM4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERCMUIwQTI4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTMyOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJBNDE0QUJDOTlBMTExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8kSqyAAADD5JREFUeNrsXQ2Q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",alt:"GitHub Link"})}),Object(g.jsx)("a",{href:"https://www.linkedin.com/in/max-degeorge/",rel:"noopener noreferrer",target:"_blank",children:Object(g.jsx)("img",{src:"data:image/png;base64,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",alt:"LinkedIn Link"})}),Object(g.jsx)("a",{href:"https://maxdegeo.itch.io/",rel:"noopener noreferrer",target:"_blank",children:Object(g.jsx)("img",{src:w,alt:"Itch.io Link"})})]}),Object(g.jsxs)("p",{id:"copyright",children:["\xa9 ",(new Date).getFullYear()," Max De George"]})]})]})]})}}]),t}(r.a.Component);var F=function(){return Object(g.jsx)(Y,{})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(Object(g.jsx)(F,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[28,1,2]]]);
//# sourceMappingURL=main.ee5105ea.chunk.js.map