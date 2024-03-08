import React from 'react';

const Header = () => {
return (
    <header>
        <div className='sub-header-container '>
            
        <p className="BlogTopbar__HeadLineStrip__2EgwK ">
            Now get exciting rewards on learning.&nbsp;
            <a href="/p" target="_blank" 
            style={{color:'white',fontWeight:'bolder'}}>
                Know More
                </a>
                <img className="BlogTopbar__CloseIcon__Ppkck" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALBJREFUeNqs1M0KgzAMAOC+pnjVQd5KdxCfbl70KDGBjE2btIkYyMH8fFSUJkQcKDfKV7oRvEe5Uo788MFfQBCCv92FCw3lHgUvEO8330YbARWI908DLtCCTpgHLEEZVgI1SOo2ZoCzBrkwA8wgNyaD7ws2KDOukwHqASFMgWYLrH1N0BYL9WT9Z1B5payvYjXIA4agGsiNPgIVwD7JxfbEfbZyYRKwu3nTdrI/HQIMALUMzyE2qS97AAAAAElFTkSuQmCC" alt="Remove Icon"/>
                </p>
    <div>
        <div className="topbar">
        <div className="logo py-2">
            <div>
            <div className="logo_edyoda">EDYODA</div>
            <p className="logo_stories">Stories</p>
            </div>
        </div>
        <div className="dropdown">
            <div className="dropdown_text">
            </div>

        </div>
            <div className='header-text-container'>
        <p  className='header-text'>
        EdYoda is a learning and knowledge
        sharing platform for techies
        </p>
            </div>
        <button className="Button__Button__QI7b2" >
                Go To Main Website
                </button>
        </div>
    </div>
        </div>
    </header>
);
};

export default Header;
