(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),i=t(8),s=t.n(i),r=(t(16),function(e){var a=e.resumeData;return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",{id:"home"},n.a.createElement("nav",{id:"nav-wrap"},n.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),n.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),n.a.createElement("ul",{id:"nav",className:"nav"},n.a.createElement("li",{className:"current"},n.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),n.a.createElement("div",{className:"row banner"},n.a.createElement("div",{className:"banner-text"},n.a.createElement("h1",{className:"responsive-headline"},"I am ",a.name,"."),n.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",a.role,".",a.roleDescription),n.a.createElement("hr",null),n.a.createElement("ul",{className:"social"},a.socialLinks&&a.socialLinks.map(function(e){return n.a.createElement("li",{key:e.name},n.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:e.className})))})))),n.a.createElement("p",{className:"scrolldown"},n.a.createElement("a",{className:"smoothscroll",href:"#about"},n.a.createElement("i",{className:"icon-down-circle"})))))}),c=function(e){var a=e.resumeData;return n.a.createElement("section",{id:"about"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"three columns"},n.a.createElement("img",{className:"profile-pic",src:"images/portfolio/pic.png",alt:"Surbhi Pic"})),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("h2",null,"About Me"),n.a.createElement("p",null,a.aboutme),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"columns contact-details"},n.a.createElement("h2",null,"Contact Details"),n.a.createElement("p",{className:"address"},n.a.createElement("span",null,a.name),n.a.createElement("br",null),n.a.createElement("span",null,a.address),n.a.createElement("br",null),n.a.createElement("span",null,n.a.createElement("a",{href:"mailto:"+a.email}," ",a.email)),n.a.createElement("br",null),n.a.createElement("span",null,a.website)))))))},m=t(1),o=t(2),u=t(4),p=t(3),d=t(5),h=function(e){function a(){return Object(m.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return n.a.createElement("section",{id:"resume"},n.a.createElement("div",{className:"row education"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Education"))),n.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return n.a.createElement("div",{className:"row item"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("h3",null,e.UniversityName),n.a.createElement("p",{className:"info"},e.specialization,n.a.createElement("span",null,"\u2022")," ",n.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),n.a.createElement("p",null,e.Achievements)))}))),n.a.createElement("div",{className:"row work"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Work"))),n.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return n.a.createElement("div",{className:"row item"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("h3",null,e.CompanyName),n.a.createElement("p",{className:"info"},e.specialization,n.a.createElement("span",null,"\u2022")," ",n.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),n.a.createElement("p",null,e.Achievements)))}))),n.a.createElement("div",{className:"row skill"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Skills"))),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("p",null,e.skillsDescription),n.a.createElement("div",{className:"bars"},n.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return n.a.createElement("li",null,n.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),n.a.createElement("em",null,e.skillname))}))))))}}]),a}(l.Component),E=t(6),g=function(e){function a(){return Object(m.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.item,a=this.props.handleClose;this.props.index;return n.a.createElement("div",{className:"popup-modal"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"description-box"},n.a.createElement("button",{className:"closeBtn",onClick:a},"X"),console.log(e),n.a.createElement("img",{src:e.imgurl,className:"img-modal"}),n.a.createElement("h4",null,e.name),n.a.createElement("p",null,e.description),n.a.createElement("p",null,e.languages),n.a.createElement("a",{href:e.github},"This is a clickable link"),n.a.createElement("a",{href:e.demo?e.demo:e.deployed},"This is a 2nd clickable link"))))}}]),a}(l.Component),v=function(e){var a=e.resumeData,t=Object(l.useState)(!1),i=Object(E.a)(t,2),s=i[0],r=i[1],c=Object(l.useState)({}),m=Object(E.a)(c,2),o=m[0],u=m[1];return n.a.createElement("section",{id:"portfolio"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"twelve columns collapsed"},n.a.createElement("h1",null,"Check Out Some of My Works."),n.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},a.portfolio.map(function(e,a,t){return n.a.createElement("div",{className:"columns portfolio-item",key:a},n.a.createElement("div",{className:"item-wrap"},n.a.createElement("img",{src:"".concat(e.imgurl),alt:e.name,className:"item-img"}),n.a.createElement("div",{className:"overlay",onClick:function(){return u(e),void r(!0)}},n.a.createElement("div",{className:"portfolio-item-meta"},n.a.createElement("h5",null,e.name),n.a.createElement("p",null,e.description)))))}),s?n.a.createElement(g,{item:o,handleClose:function(){r(!1)}}):n.a.createElement("div",null)))))},f=function(e){var a=e.resumeData;return n.a.createElement("section",{id:"testimonials"},n.a.createElement("div",{className:"text-container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"two columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Client Testimonials"))),n.a.createElement("div",{className:"ten columns flex-container"},n.a.createElement("div",{className:"flexslider"},n.a.createElement("ul",{className:"slides"},a.testimonials&&a.testimonials.map(function(e){return n.a.createElement("li",null,n.a.createElement("blockquote",null,n.a.createElement("p",null,e.description),n.a.createElement("cite",null,e.name)))})))," ")," ")," ")," ")},N=function(e){var a=e.resumeData;return n.a.createElement("section",{id:"contact"},n.a.createElement("div",{className:"row section-head"},n.a.createElement("div",{className:"ten columns"},n.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions below"))),n.a.createElement("div",{className:"row"},n.a.createElement("aside",{className:"eigth columns footer-widgets"},n.a.createElement("div",{className:"widget"},n.a.createElement("h4",null,"LinkedIn :",a.linkedinId)))))},b=function(e){function a(){return Object(m.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return n.a.createElement("footer",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return n.a.createElement("li",null,n.a.createElement("a",{href:e.url},n.a.createElement("i",{className:e.className})))}))),n.a.createElement("div",{id:"go-top"},n.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},n.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(l.Component),k={imagebaseurl:"reactportfolio/public/images/portfolio/pic.png",name:"Surbhi Arora",role:"Full Stack developer  ",linkedinId:"surbhiarora26927210",skypeid:"Your skypeid",roleDescription:" I am passionate about learning how to build a connective, impactful experience through creatively engaging user interfaces and meaningful online interactions on the web.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/surbhi-arora-26927210/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/Surbhiarora3",className:"fa fa-github"},{name:"twitter",url:"https://twitter.com/Surbhiarora03",className:"fa fa-twitter"}],aboutme:"Washington State University gave me oppurtunity to explore the coding web world. Mantra of my Life - Never Stop Learning",address:"Seattle, WA ",website:"https://surbhiarora3.github.io/newPortfolio",email:"arora.surbhi4@gmail.com",education:[{UniversityName:"Washington State University",specialization:"Full Stack Web Development",MonthOfPassing:"June",YearOfPassing:"2022",Description:"A 12-week intensive program focused on gaining technical programming skills.",Achievements:["HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, & ReactJS."]},{UniversityName:"George Brown College",specialization:"Health Informatics",MonthOfPassing:"Jan",YearOfPassing:"2009",Achievements:" "}],work:[{CompanyName:"King Physical Therapy",specialization:"Multi speciality Clinic Manger",MonthOfLeaving:"Jan",YearOfLeaving:"2011",Achievements:""},{CompanyName:"Triangle Physiotherapy",specialization:"Multi speciality Clinic Manger",MonthOfLeaving:"Jan",YearOfLeaving:"2018",Achievements:""}],skillsDescription:"",skills:[{skillname:"HTML5",image:"/images/skills/html5-logo.png"},{skillname:"CSS",image:"/images/skills/CSS3-logo.png"},{skillname:"Javascript",image:"/images/skills/javascript-logo.png"},{skillname:"jQuery",image:"/images/skills/jquery-logo.png"},{skillname:"Reactjs",image:"/images/skills/react-logo.png"},{skillname:"Nodejs",image:"/images/skills/nodejs-logo.png"},{skillname:"Expressjs",image:"/images/skills/express-logo.png"},{skillname:"mySQL",image:"/images/skills/mysql-logo.svg"},{skillname:"MongoDB",image:"/images/skills/mongodb-logo.png"}],portfolio:[{name:"What's in your fridge?",description:"find recipes by ingredients in your fridge and watch videos in same page",imgurl:"images/portfolio/whatsinyourfridgepic.JPG",languages:["HTML","CSS","Javascript"],github:"https://github.com/kimester/inMyFridge",demo:"https://kimester.github.io/inMyFridge"},{name:"Sesh",description:"Make your coding skills amazing with SESH which will give you company in your alone time ",imgurl:"images/portfolio/seshpic.JPG",languages:["HTML","CSS","Javascript","Node.js","Express.js","mySQL"],github:"https://github.com/Surbhiarora3/Sesh",demo:"https://guarded-harbor-06421.herokuapp.com"},{name:"Day Planner",description:"plan your day with my new app and make everyday life easy with all the tracking",imgurl:"images/portfolio/WorkdayPlanner.JPG",languages:["HTML","CSS","Javascript"],github:"https://github.com/Surbhiarora3/Work-Day-Planner",demo:"https://surbhiarora3.github.io/Work-Day-Planner/"}],testimonials:[{description:"This is a sample testimonial",name:"Sample B"},{description:"This is a sample testimonial",name:"Sample A"}]},w=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(r,{resumeData:k}),n.a.createElement(c,{resumeData:k}),n.a.createElement(h,{resumeData:k}),n.a.createElement(v,{resumeData:k}),n.a.createElement(f,{resumeData:k}),n.a.createElement(N,{resumeData:k}),n.a.createElement(b,{resumeData:k}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.4ec4f200.chunk.js.map