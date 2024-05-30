
const Carusel = () => {
    return (
             <div className="shadow-lg w-full">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full ">
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/rsnN4M9/360-F-32069160-96-Jp-OLq-NYK15-MBN3-UPl-XBp-Zjuj3-Hy-Gqx.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold ">Volunteer</h1>
                                <p className="mb-5">Volunteering is a way of helping others. It is giving a person s time and ability to help someone who may be in need of help. Not only does volunteering help others, but what they may not know is that it can be helpful to themselve</p>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full ">
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/0jhgzSV/istockphoto-1303107115-612x612.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">volunteering helped</h1>
                                <p className="mb-5">I started volunteering when I was 19 - which is 12 years ago - and I believe its what sparked the start of my career in the arts. Find out more about how volunteering can help spark kick-start your career</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full ">
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/GnVJ2vm/images-1.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Volunteering Work</h1>
                                <p className="mb-5">Volunteering is a way of helping others. It is giving a person time and ability to help someone who may be in need of help. Not only does volunteering help others, but what they may not know is that it can be helpful to themselves. It is a great way for someone to interact with others in their community.</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full ">
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/ckhrRY5/Short-term.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Volunteers program</h1>
                                <p className="mb-5">Volunteers are the backbone of many organizations, providing invaluable support and assistance in a variety of roles. Their dedication, passion, and selflessness are key to the successful implementation of projects and initiatives. Volunteers often bring a unique blend of skills, experiences, and perspectives </p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Carusel;