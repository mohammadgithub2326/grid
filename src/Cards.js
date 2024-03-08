import React from 'react';
const style= {backgroundColor:'#172146'}

const postsData = [
    {
        "id": 1,
        "title": "Introduction to a machine learning online course",
        "author": "John Doe",
        "category": "Artificial Intelligence",
        "date": "2023-12-18",
        "snippet": "In this post, we'll explore how to build your own AI-powered robot using Python, Raspberry Pi, and readily available sensors. Learn about programming basic movements, voice recognition, and object detection...",
        "image": "https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png"
    },
    {
        "id": 2,
        "title": "Mastering Data Analysis with pandas in Python",
        "author": "Jane Smith",
        "category": "Data Science",
        "date": "2023-12-15",
        "snippet": "Pandas is a powerful Python library for data manipulation and analysis. This post dives deep into essential pandas functionalities like data structures, cleaning, wrangling, and advanced operations...",
        "image": "https://edyoda.s3.amazonaws.com/media/blog-images/6.png"
    },
    {
        "id": 3,
        "title": "5 Tips for Landing Your Dream Tech Job",
        "author": "Michael Jackson",
        "category": "Career",
        "date": "2023-12-12",
        "snippet": "Navigating the competitive tech job market can be challenging. We've compiled 5 key tips to help you stand out from the crowd, craft a compelling resume, ace interviews, and land your dream role...",
        "image": "https://edyoda.s3.amazonaws.com/media/blog-images/4.png"
    },
    {
        "id": 4,
        "title": "Demystifying Web Scraping with Python",
        "author": "Sarah Miller",
        "category": "Web Development",
        "date": "2023-12-10",
        "snippet": "Web scraping automates data extraction from websites. This post guides you through the basics of web scraping with Python libraries like BeautifulSoup and Scrapy, highlighting ethical considerations and practical applications...",
        "image": "https://edyoda.s3.amazonaws.com/media/blog-images/5.png"
    },
    {
        "id": 5,
        "title": "Unlocking the Power of Cloud Computing with AWS",
        "author": "David Lee",
        "category": "Cloud Computing",
        "date": "2023-12-07",
        "snippet": "Amazon Web Services (AWS) is a leading cloud computing platform. This post introduces fundamental AWS services like S3, EC2, and Lambda, showcasing their potential for scalable applications and cost-effective solutions...",
        "image": "https://edyoda.s3.amazonaws.com/media/blog-images/3.png"
    },
    {
        "id": 6,
        "title": "Building Websites for Beginners with HTML and CSS",
        "author": "Emma Davis",
        "category": "Web Development",
        "date": "2023-12-05",
        "snippet": "Learn the fundamentals of web development with HTML and CSS! This post covers basic webpage structure, styling elements, and responsive design practices to create beautiful and functional websites...",
        "image": "https://edyoda.s3.amazonaws.com/media/blog-images/7.png"
    },
    {
        "id": 7,
        "title": "Mastering Git and GitHub for Version Control",
        "author": "Chris Johnson",
        "category": "Software Development",
        "date": "2023-12-02",
        "snippet": "Version control helps manage code changes efficiently. This post explores Git commands, branching strategies, and collaboration tools like GitHub to streamline your development workflow...",
        "image": "https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png"
    },
    {
        "id": 8,
        "title": "Data Visualization with Python and Tableau",
        "author": "Anna Sharma",
        "category": "Data Science",
        "date": "2023-11-30",
        "snippet": "Turn data into compelling insights with Python libraries like Matplotlib and Tableau. This post guides you through data visualization techniques, storytelling with charts, and creating impactful dashboards...",
        "image": "https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png"
    },
    {
        "id": 9,
        "title": "The Ultimate Guide to Machine Learning with Python",
        "author": "Tom Wilson",
        "category": "Artificial Intelligence",
        "date": "2023-11-27",
        // "date": "2023-11-27",
        "snippet": "Explore the exciting world of machine learning with Python libraries like scikit-learn and TensorFlow. This post demystifies key concepts, introduces popular algorithms, and guides you through building your own machine learning models...",
        "image": "https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png"
    }
];

const Cards = () => {
    return (
        <>
        
    <div className="cards-container" style={{ backgroundColor: '#f2f6ff' }}>
        <div className="cards-wrapper" style={{ marginLeft: 120, marginRight: 120 }}>
        {postsData.map((post) => (
            <div key={post.id} className="card">
            <div className="blog-image-container">
                <img className="blog-image" src={post.image} alt={post.title} />
            </div>
            <div className="blog-card-details">
                <h3 className="blog-title">
                <div className="line-ellipsis">{post.title}</div>
                </h3>
                <p className="blog-author-name">
                {post.author}
                <span className="blog-publish-date">| {post.date}</span>
                </p>
                <div className="blog-description">
                <div>{post.snippet}</div>
                </div>
            </div>
            </div>
        ))}
        </div>
{/* <div className="_hj-0izHt__MinimizedWidgetBottom__container _hj-RCGJ4__MinimizedWidgetBottom__left">



     <button className="_hj-g7b-Z__MinimizedWidgetBottom__open _hj-RCGJ4__MinimizedWidgetBottom__left" aria-label="Open">
      <div className="_hj-pRFOn__EmotionIconDefault__iconEmotionDefault _hj-L5SMl__styles__icon _hj-F-vtG__EmotionIconDefault__like">
          <span className="_hj-NS6la__EmotionIconDefault__commentIcon"></span><span className="_hj-2OhzN__EmotionIconDefault__expressionIcon">
          </span>
      </div>
     </button>
 </div> */}
        <footer >
            <div className='column-container'>
                <div className='colomn'  style={style} >
               <span className='c' > EDYODA<br/><br/></span>
                    About Us<br/>
                    Careers<br/>
                    Contact Us<br/>
                    Terms of Use<br/>
                    Privacy Policy<br/>
                </div><br/><br/>
                <div className='colomn'  style={style}>
                <span className='c'> CAREER TRACK<br/><br/></span>
                <span className='c'>TECH<br/></span>    
                    React Developer<br/>
                    Full Stack Developer<br/>
                    Data Scientist<br/>
                    Data Scientist for Professionals<br/>
                    <span className='c'>INTERNSHIP PROGRAMS<br/></span>
                    Frontend Web Developer<br/>
                    Python Developerv
                </div><br/><br/>
                <div className='colomn'  style={style}>
                <span className='c'> MICRO DEGREE<br/><br/></span>
                    <span className='c'>TECH<br/></span>
                    Python Development<br/>
                    Data Analysis<br/>
                    Frontend Web Development<br/>
                    Artificial Intelligence & Machine Learning<br/>
                    Business Analysis<br/>
                    Power BI<br/>
                    AWS Solutions Architect<br/>
                    Devops Engineer<br/>
                    Docker Certified Associate<br/>
                    Certified Kubernetes Administrator<br/>
                    Tableau Certification<br/>
                    Java Developement<br/>
                    Advanced Java Developement<br/>
                   <span className='c'>BUSINESS<br/></span> 
                    Digital Marketing<br/>
                </div><br/><br/>
                <div className='colomn'  style={style}>
                <span className='c'> RESOURCES<br/><br/></span>
                    Jobs<br/>
                    Learning Paths<br/>
                    Courses<br/>
                    Learning Videos<br/>
                    Educators<br/>
                    EdYoda Stories<br/>
                    University<br/>
                </div><br/><br/>
                <div className='colomn'  style={style}>
                <span className='c'> FOR ENTREPRISES<br/><br/></span>
                    Hire EdYoda Graduates<br/>
                    Train Your Employees<br/>
                   <span className='c'> QUICK LINKS<br/></span>
                    Learn and Earn<br/>
                    Become a Learning-Enabler<br/>
                    Tips for Learning-Enablerv<br/>
                    Request New Topic<br/>
                    Certification<br/>
                    Affiliate Progam<br/>
                </div><br/><br/>
                <div className='colomn' style={style}>
                <span className='c'> CONNECT<br/><br/></span>
                    1st Floor,<br/>
                    Gopalan Millennium Tower,<br/>
                    ITPL Main Road, Brookefield,<br/>
                    Bengaluru, Karnataka-560037,<br/>
                    India<br/>
                    EdYoda Email Iconsupport@edyoda.com<br/>
                    EdYoda Telephone Icon+91 8971554184  (11 AM to 6 PM)<br/>
                    Google maps location icon<br/>
                    EdYoda Twitter Icon<br/>
                    EdYoda Facebook Icon<br/>
                    EdYoda LinkedIn Icon<br/>
                    EdYoda Telegramm Icon<br/>
                </div>
            </div>
            <hr  style={{color:"white"}}/>
            <p className='l-1'>Footer IconFooter IconFooter IconFooter IconFooter IconFooter Icon</p>  
        {/* Footer content */}
        </footer><hr/>
        <p className='l'>© 2024 zekeLabs Technologies Private Limited</p>
    </div>
        </>
    );
};
export default Cards;