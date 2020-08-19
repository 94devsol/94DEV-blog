/**************************************
    File Name: custom.js
    Template Name: Tech Blog
    Created By: HTML.Design
    http://themeforest.net/user/wpdestek
**************************************/

(function ($) {
    "use strict";
    $(document).ready(function () {
        $('#nav-expander').on('click', function (e) {
            e.preventDefault();
            $('body').toggleClass('nav-expanded');
        });
        $('#nav-close').on('click', function (e) {
            e.preventDefault();
            $('body').removeClass('nav-expanded');
        });
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    $('.carousel').carousel({
        interval: 4000
    })

    $(window).load(function () {
        $("#preloader").on(500).fadeOut();
        $(".preloader").on(600).fadeOut("slow");
    });

    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 1) {
            jQuery('.dmtop').css({ bottom: "25px" });
        } else {
            jQuery('.dmtop').css({ bottom: "-100px" });
        }
    });
    jQuery('.dmtop').click(function () {
        jQuery('html, body').animate({ scrollTop: '0px' }, 800);
        return false;
    });

})(jQuery);


function openCategory(evt, catName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(catName).style.display = "block";
    evt.currentTarget.className += " active";
}



let allPosts = [{
    postId: '0001',
    postTitle: 'What is Firebase',
    postBy: 'Kabbo Liate',
    postByLink: '/auther/rickey_meddi',
    postCategary: "JavaScript",
    postDate: '2019/12/12',
    postContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dotempor incididunt ut. labore et dolore magna aliqua. Ut enim ad minim veniam',
    postLink: '/what-is-firebase',
    postImageURL: 'data:image/png;base64,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'
},
{
    postId: '0002',
    postTitle: 'What is AWS',
    postBy: 'Kabbo Liate',
    postByLink: '/auther/rickey_meddi',

    postCategary: "JavaScript",
    postDate: '2019/12/12',
    postContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dotempor incididunt ut. labore et dolore magna aliqua. Ut enim ad minim veniam',
    postLink: '/what-is-aws',
    postImageURL: 'https://www.edureka.co/blog/wp-content/uploads/2018/10/Amazon-Web-Services_logo835x396.png'


},
{
    postId: '0003',
    postTitle: 'What is Serverless',
    postBy: 'Kabbo Liate',
    postCategary: "JavaScript",
    postByLink: '/auther/rickey_meddi',

    postDate: '2019/12/12',
    postContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dotempor incididunt ut. labore et dolore magna aliqua. Ut enim ad minim veniam',
    postLink: '/what-is-serverless',
    postImageURL: 'https://netbears.com/assets/img/articles/serverless-website/serverless.png'
},
{
    postId: '0004',
    postTitle: 'What is NodeJS',
    postCategary: "JavaScript",
    postBy: 'Kabbo Liate',
    postByLink: '/auther/rickey_meddi',

    postDate: '2019/12/12',
    postContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dotempor incididunt ut. labore et dolore magna aliqua. Ut enim ad minim veniam',
    postLink: '/what-is-nodejs',
    postImageURL: 'https://www.janis.ai/img/integrations-nodejs.png'
},
{
    postId: '0005',
    postTitle: 'What is NodeJS',
    postCategary: "JavaScript",
    postBy: 'Kabbo Liate',
    postByLink: '/auther/rickey_meddi',

    postDate: '2019/12/12',
    postContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dotempor incididunt ut. labore et dolore magna aliqua. Ut enim ad minim veniam',
    postLink: '/what-is-nodejs',
    postImageURL: 'https://www.janis.ai/img/integrations-nodejs.png'
},
{
    postId: '0006',
    postTitle: 'What is NodeJS',
    postCategary: "JavaScript",
    postBy: 'Kabbo Liate',
    postByLink: '/auther/rickey_meddi',

    postDate: '2019/12/12',
    postContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dotempor incididunt ut. labore et dolore magna aliqua. Ut enim ad minim veniam',
    postLink: '/what-is-nodejs',
    postImageURL: 'https://www.janis.ai/img/integrations-nodejs.png'
},
{
    postId: '0007',
    postTitle: 'What is NodeJS',
    postCategary: "JavaScript",
    postBy: 'Kabbo Liate',
    postByLink: '/auther/rickey_meddi',

    postDate: '2019/12/12',
    postContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dotempor incididunt ut. labore et dolore magna aliqua. Ut enim ad minim veniam',
    postLink: '/what-is-nodejs',
    postImageURL: 'https://www.janis.ai/img/integrations-nodejs.png'
}]


// 


const appendToHTML = () => {

    allPosts.reverse().forEach((singlePost, i) => {

        // console.log(i)

        if (i === 0) {
            document.getElementById('first-slot').innerHTML += ` <div class="masonry-box post-media">
                <img src=${singlePost.postImageURL} alt="" style="height: 260px;
                object-fit: contain;" class="img-fluid">
                    <div class="shadoweffect">
                        <div class="shadow-desc">
                            <div class="blog-meta">
                                <span class="bg-orange">
                                       ${singlePost.postCategary}</span>
                                <h4><a href=${singlePost.postLink} title="">${singlePost.postTitle}</a></h4>
                                <span style="color: white;">${singlePost.postDate}</span><br>
                             <a href=${singlePost.postByLink}><span style="color: white;">by ${singlePost.postBy}</span></a>
                            </div><!-- end meta -->
                        </div><!-- end shadow-desc -->
                    </div><!-- end shadow -->
                </div><!-- end post-media -->`
        } else if (i === 1) {
            document.getElementById('second-slot').innerHTML += `
                    <div class="masonry-box post-media">
                            <img src=${singlePost.postImageURL} style="height: 260px;
                            object-fit: contain;" alt="" class="img-fluid">
                            <div class="shadoweffect">
                                <div class="shadow-desc">
                                    <div class="blog-meta">
                                        <span class="bg-orange">${singlePost.postCategary}</span>
                                        <h4><a href=${singlePost.postLink} title="">${singlePost.postTitle}</a></h4>
                                        <span style="color: white;">${singlePost.postDate}</span><br>
                                        <a href=${singlePost.postByLink}><span style="color: white;">by ${singlePost.postBy}</span></a>
                                        </div><!-- end meta -->
                                </div><!-- end shadow-desc -->
                            </div><!-- end shadow -->
                        </div><!-- end post-media -->
            `
        } else if (i === 2) {
            document.getElementById('last-slot').innerHTML += `
            <div class="masonry-box post-media">
            <img src=${singlePost.postImageURL} style="height: 260px;
            object-fit: contain;" alt="" class="img-fluid">
            <div class="shadoweffect">
                <div class="shadow-desc">
                    <div class="blog-meta">
                        <span class="bg-orange">
                           ${singlePost.postCategary}</span>
                            <h4><a href=${singlePost.postLink} title="">${singlePost.postTitle}</a></h4>
                            <span style="color: white;">${singlePost.postDate}</span><br>
                            <a href=${singlePost.postByLink}><span style="color: white;">by ${singlePost.postBy}</span></a>
                            </div><!-- end meta -->
                </div><!-- end shadow-desc -->
            </div><!-- end shadow -->
        </div><!-- end post-media -->
            `
        } else {
            let dateInNormalFormat = new Date(singlePost.postDate)
            let updatedDate = dateInNormalFormat.getFullYear() + "-" + (dateInNormalFormat.getMonth() + 1) + "-" + dateInNormalFormat.getDate() + " " + dateInNormalFormat.getHours() + ":" + dateInNormalFormat.getMinutes() + ":" + dateInNormalFormat.getSeconds()

            document.getElementById('allPosts').innerHTML += `
            <div class="blog-box row">
            <div class="col-md-4">
                <div class="post-media">
                    <a href=${singlePost.postLink} title="">
                        <img src=${singlePost.postImageURL} style="height: 180px;
                        object-fit: contain;" alt="" class="img-fluid">
                        <div class="hovereffect"></div>
                    </a>
                </div><!-- end media -->
            </div><!-- end col -->
    
            <div class="blog-meta big-meta col-md-8">
                <h4><a href=${singlePost.postLink} title="">${singlePost.postTitle}</a></h4>
                <p>${singlePost.postContent}</p>
                <small class="firstsmall"><a class="bg-orange" href=""
                        title="">${singlePost.postCategary}</a></small>
                <small><a href="" title="">${singlePost.postDate}</a></small>
                <small><a href="" title="">by ${singlePost.postBy}</a></small>
            </div><!-- end meta -->
        </div><!-- end blog-box -->
    
        <hr class="invis">
        
        `
        }



    })
}



appendToHTML()