var app = new Vue ({
    el: "#app",
    methods: {
        LearnMore: function(event) {
            alert("Site is not fully ready yet, please subscribe to our newsletter for the latest updates!")
            }
        },

        data : {
            LinkArray:[
                
                {
                text: "Home",
                url: "#"
                },

                {
                    text:"About",
                    url: "#"
                },

                {
                    text:"Academics",
                    url:"#",
                },

                {
                    text:"Courses",
                    url:"#",
                },

                {
                    text:"News",
                    url:"#",
                },
            ],


            SupportArray:[
                
                {
                    text: "Privacy",
                    url: "#"
                },

                {
                    text:"Terms",
                    url: "#"
                },

                {
                    text:"Cookie Policy",
                    url:"#",
                },

                {
                    text:"Sitemap",
                    url:"#",
                },

            ],

            ExploreArray:[
                {
                    text: "Accomodation",
                    url: "#"
                },

                {
                    text: "Arc Academics",
                    url: "#"
                },

                {
                    text: "Central Services",
                    url: "#"
                },

                {
                    text: "Conferences and Events",
                    url: "#"
                },

                {
                    text: "Food and Drink",
                    url: "#"
                },
 
            ],

            VisitArray:[
                {
                    text: "Admission",
                    url: "#"
                },

                {
                    text: "Contact Us",
                    url: "#"
                },

                {
                    text: "FAQs",
                    url: "#"
                },

                {
                    text: "Request Information",
                    url: "#"
                },

                {
                    text: "Privacy Notice",
                    url: "#"
                },

            ],
        },
})
