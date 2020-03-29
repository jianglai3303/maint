import "../styles/intro.less"
import React from "react"
export default class Intro extends React.Component {
    render(){
        return (
            <div className="intro-wapper">
                <div className="left-space-banner"></div>
                <div className="inner-wrapper">
                    <div className="intro-frame">
                        <div className="left-part">
                            <h3>WHO ARE WE</h3>
                            <h2>System Solution Provider & Website Agency in Toronto</h2>
                            <p>Based in Toronto, MAINT is a digital agency specializing in the creation of high quality websites and technical solutions</p>
                            <p>MAINT is more than just a leading Toronto website building company. Our expertise includes system solutions, brand strategy and e-commerce solution to help you gain leads and meet your business goals.
                                From social media campaigns to SEO, email marketing, corporate design, and online sales, MAINT offers the full range of services designed to help your business grow.</p>
                        </div>
                        <div className="right-sklls">
                            <div className="skills-top-image"></div>
                            <div className="skills-intro">
                                <h3 className="skill-title">SKILLS</h3>
                                <ul className="skill-list">
                                    <li className="skill-item">
                                        <svg t="1583954579354" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4568" width="512" height="512">
                                            <path d="M925.615761 714.899106 108.231515 714.899106c-22.261003 0-46.288233-16.603143-46.288233-43.425022l0-555.757596c0-12.174274 5.169743-25.473161 14.183024-36.482913 9.484002-11.583826 21.185508-18.228153 32.105209-18.228153l817.385269 0c20.195971 0 33.766035 21.986757 33.766035 54.710043l0 555.757596C959.381795 710.668759 935.767981 714.899106 925.615761 714.899106zM108.231515 86.589101c-6.17156 0-20.705578 15.234983-20.705578 29.127388l0 555.757596c0 12.608156 13.486152 17.842367 20.705578 17.842367l817.385269 0c3.060709 0 8.18338 0 8.18338-17.842367l0-555.757596c0-18.797112-6.147-29.127388-8.18338-29.127388L108.231515 86.589101z" p-id="4569"></path><path d="M497.8707 689.316451l25.582655 0 0 254.803243-25.582655 0 0-254.803243Z" p-id="4570"></path><path d="M203.158515 931.84002l616.030331 0 0 25.582655-616.030331 0 0-25.582655Z" p-id="4571"></path><path d="M87.524914 177.663352l846.274226 0 0 25.582655-846.274226 0 0-25.582655Z" p-id="4572"></path><path d="M728.053196 165.175947c-14.111392 0-25.590841-11.480472-25.590841-25.591865 0-14.112416 11.479449-25.592888 25.590841-25.592888 14.112416 0 25.594935 11.480472 25.594935 25.592888C753.647107 153.696498 742.165612 165.175947 728.053196 165.175947z" p-id="4573"></path><path d="M804.82879 165.175947c-14.111392 0-25.590841-11.480472-25.590841-25.591865 0-14.112416 11.479449-25.592888 25.590841-25.592888 14.112416 0 25.592888 11.480472 25.592888 25.592888C830.421678 153.696498 818.941206 165.175947 804.82879 165.175947z" p-id="4574"></path><path d="M881.604384 165.175947c-14.111392 0-25.591865-11.480472-25.591865-25.591865 0-14.112416 11.480472-25.592888 25.591865-25.592888s25.591865 11.480472 25.591865 25.592888C907.196249 153.696498 895.715777 165.175947 881.604384 165.175947z" p-id="4575"></path><path d="M401.75862 342.368857l18.095284 18.095284-108.576045 108.576045-18.095284-18.095284 108.576045-108.576045Z" p-id="4576"></path><path d="M311.270195 432.850924l108.574598 108.574598-18.096008 18.096008-108.574598-108.574598 18.096008-18.096008Z" p-id="4577"></path><path d="M631.169562 342.367149l108.576045 108.576045-18.095284 18.095284-108.576045-108.576045 18.095284-18.095284Z" p-id="4578"></path><path d="M721.653894 432.850145l18.095284 18.095284-108.575322 108.575322-18.095284-18.095284 108.575322-108.575322Z" p-id="4579"></path><path d="M542.945102 306.790598l24.665439 6.820232-77.837748 281.501019-24.665439-6.820232 77.837748-281.501019Z" p-id="4580"></path>
                                        </svg>
                                        <span>System Solutions</span>
                                    </li>
                                    <li className="skill-item">
                                        <svg t="1583957381773" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4838" width="200" height="200"><path d="M585.111893 511.011086c-23.745222 0-43.385774 9.369846-56.013617 23.627817-12.643648 14.316673-18.477788 32.706407-18.477788 50.863589 0 23.219156-16.91991 42.250104-24.135821 47.894589-11.08577 8.728633-4.917476 26.567465 9.238894 26.594558h74.491406c23.424615 0 45.216845-6.86821 61.746157-19.728606s27.642175-32.473855 27.642174-54.760541c0-20.36982-5.761891-39.342065-18.769043-53.193633-13.1223-13.84931-32.677056-21.297773-55.722362-21.297773z m0 29.796111c16.992159 0 27.235772 4.770719 33.986577 11.927927 6.750805 7.159466 10.70646 17.924628 10.70646 32.767368 0 12.860396-5.644486 23.101751-16.091299 31.279481-10.503259 8.119028-25.982696 13.413556-43.500922 13.413556h-42.394603c7.071412-11.930185 12.569141-26.829369 12.569141-44.693037 0-11.638929 3.869859-22.988861 10.968364-31.078538 7.159466-8.030974 17.371469-13.616757 33.726931-13.616757h0.029351zM936.235022 213.341236c-3.754712 0.467363-6.954006 1.456277-10.503259 2.677744-7.100763 2.386489-15.278494 6.285699-24.966688 11.173823-19.380906 9.834952-43.995379 24.210328-70.009684 40.649328-52.143758 32.850906-109.060493 73.208978-138.332795 102.451929-27.845376 27.818283-48.127142 53.132672-57.670839 78.564466-9.545954 25.373092-5.529338 52.958822 14.255713 72.687428 19.787309 19.843754 47.370781 23.858112 72.746131 14.314416 25.431794-9.543696 50.746183-29.852555 78.564466-57.670839 29.211342-29.301654 69.601023-86.216131 102.510632-138.271835 16.439-26.100101 30.812118-50.746183 40.649327-70.124831 4.944569-9.63175 8.728633-17.865926 11.171566-24.966689 1.223724-3.549253 2.153936-6.721453 2.562597-10.476165s1.424668-9.719804-4.946828-16.0913c-6.400847-6.400847-12.307236-5.355488-16.091299-4.976178l0.06096 0.058703z m-19.292852 43.035816c-9.137293 17.95398-23.219156 42.191401-39.339806 67.652546-32.182599 51.037439-73.267681 108.069321-98.293073 133.092455-26.479411 26.45006-50.016916 44.112784-68.029598 50.863589-18.012682 6.721453-28.457239 5.296785-41.202487-7.448463-12.745248-12.803951-14.169917-23.221414-7.448463-41.202487 6.777898-18.012682 24.413529-41.552445 50.920033-67.970896 25.025391-25.023134 82.057274-66.110473 133.092455-98.293072 25.490497-16.179354 49.700825-30.261216 67.681898-39.39851 4.016616-1.076968 3.901468 0.641214 2.680002 2.677744l-0.060961 0.027094zM138.170234 302.44057h506.53388c8.263527 0 14.899184 6.633399 14.899184 14.896926s-6.633399 14.899184-14.899184 14.899184H138.170234c-8.247722 0-14.896926-6.633399-14.896926-14.899184s6.649204-14.896926 14.896926-14.896926z m134.083627-44.695295c0 8.204824-6.678555 14.896926-14.899184 14.896926s-14.899184-6.692102-14.899185-14.896926c0-8.207082 6.678555-14.899184 14.899185-14.899184s14.899184 6.692102 14.899184 14.899184z m-59.592221 0a14.917247 14.917247 0 0 1-14.899185 14.896926 14.914989 14.914989 0 0 1-14.896926-14.896926c0-8.207082 6.678555-14.899184 14.896926-14.899184a14.919504 14.919504 0 0 1 14.899185 14.899184z m-59.592222 0a14.917247 14.917247 0 0 1-14.899184 14.896926 14.914989 14.914989 0 0 1-14.896926-14.896926c0-8.207082 6.678555-14.899184 14.896926-14.899184a14.919504 14.919504 0 0 1 14.899184 14.899184zM108.374124 183.256127c-24.485779 0-44.693037 20.193712-44.693037 44.693037v566.123844c0 24.501583 20.209516 44.695295 44.693037 44.695295h744.900507c24.501583 0 44.695295-20.193712 44.695294-44.695295V436.521939c0-19.902456-29.796111-19.814402-29.79611 0v357.551069c0 8.525431-6.371495 14.899184-14.899184 14.899184H108.374124c-8.525431 0-14.899184-6.371495-14.899185-14.899184V227.949164c0-8.525431 6.373753-14.899184 14.899185-14.899184h744.900507c19.814402 0 19.584107-29.796111 0-29.79611H108.374124z" p-id="4839"></path></svg>
                                        <span>Web Design & Development</span>
                                    </li>
                                    <li className="skill-item">
                                    <svg t="1583957935787" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9343" width="200" height="200"><path d="M981.6 314.6c-25.7-60.7-62.4-115.2-109.2-162-46.8-46.8-101.3-83.5-162-109.2C647.5 16.8 580.8 3.3 512 3.3c-68.8 0-135.5 13.5-198.4 40.1-60.7 25.7-115.2 62.4-162 109.2s-83.5 101.3-109.2 162C15.8 377.5 2.3 444.2 2.3 513c0 68.8 13.5 135.5 40.1 198.4 25.7 60.7 62.4 115.2 109.2 162s101.3 83.5 162 109.2c62.8 26.6 129.6 40.1 198.4 40.1 68.8 0 135.5-13.5 198.4-40.1 60.7-25.7 115.2-62.4 162-109.2 46.8-46.8 83.5-101.3 109.2-162 26.6-62.8 40.1-129.6 40.1-198.4 0-68.8-13.5-135.5-40.1-198.4zM512 982.7C253 982.7 42.3 772 42.3 513S253 43.3 512 43.3 981.7 254 981.7 513 771 982.7 512 982.7z" p-id="9344"></path><path d="M677.2 683.9c-6.1-8.2-13.3-20.2-21.8-35.8l-29.3-53.4c-11.5-21.3-22-36.9-31.4-47-9.4-10.1-20.8-17.8-34-23.3v-2.6c32.8-11.7 57.3-28 73.7-48.8 16.4-20.8 24.6-46.1 24.6-75.8 0-38.8-12.6-67.5-37.7-85.9-25.2-18.4-63.1-27.7-113.9-27.7H346.3v15.9c10 2.8 17 5.4 21.1 7.6 4.1 2.3 7.4 5.3 9.9 9.1s4.3 9.1 5.4 15.9c1.1 6.8 1.6 17.7 1.6 32.7v281.5c0 16.1-0.7 28-2.1 35.8-1.4 7.8-4.4 13.8-8.9 18.1s-13.6 8.1-27 11.6v15.9h137.3v-15.9c-10-2.8-17-5.4-21.1-7.6-4.1-2.3-7.4-5.2-9.8-8.8-2.4-3.6-4.2-8.9-5.4-15.9-1.2-7-1.8-18.4-1.8-34V534.8h35.8c10.6 0 18.6 0.6 23.9 1.8 5.3 1.2 10.3 3.4 15 6.5 4.7 3.1 9.8 8.6 15.3 16.4 5.5 7.8 12.6 20 21.3 36.4l28.6 54.3c7.2 13.7 14.4 27.1 21.8 40.3 7.4 13.2 15.2 25.6 23.4 37.1h90.1v-15.9c-10.4-1.7-18.8-4.8-25.1-9.1-6.2-4.2-12.4-10.5-18.4-18.7zM528.1 502.8c-11.7 2.7-27 4.1-45.9 4.1h-36.8V313.6c12.1-0.9 28-1.3 47.5-1.3 24.3 0 43.6 3.6 57.9 10.7 14.3 7.2 25 17.6 32 31.2 7 13.7 10.6 30.8 10.6 51.4 0 19.7-3 36.4-8.9 49.9-6 13.6-13.9 24.1-23.9 31.7-9.9 7.7-20.7 12.9-32.5 15.6z" p-id="9345"></path></svg>
                                        <span>Branding</span>
                                    </li>
                                    <li className="skill-item">
                                         <svg t="1583957843561" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6982" width="200" height="200"><path d="M884.76891969 798.89816656L846.31901469 432.54719563c-6.72525281-63.55961719-66.92552625-113.36142281-137.21039625-113.36142282h-31.09822219v-73.43540344C678.01039625 154.65674375 603.93937063 80.59097094 512.95868656 80.59097094c-91.09231219 0-165.05565 74.06577281-165.05565 165.05171062v73.44065625h-31.09822125c-70.28487 0-130.48514344 49.79655281-137.21039625 113.46385782L141.14451406 798.79047875C136.94336563 839.03036938 149.44569125 878.746265 175.5009575 907.74062937c26.05395375 28.89192844 62.40525281 44.86128563 102.53745562 44.86128563h469.72891969c40.13745563 0 76.48875469-15.96935719 102.54270844-44.86128563 26.15770219-28.99436344 38.76771563-68.60257219 34.45887844-108.84246281zM391.92777031 245.64268156c0-66.81783844 54.31682625-121.13466469 121.13466469-121.13466469 66.71409 0 121.03091625 54.31682625 121.03091625 121.13466469v73.44065625H391.92777031V245.64268156z m425.81318719 632.68202438c-17.54528063 19.54013719-42.33849563 30.25641563-69.86593688 30.25641562H278.03841313c-27.52744219 0-52.32065625-10.71627937-69.86593688-30.25641562C190.10057469 858.35906937 181.80465125 831.78112156 184.84749687 803.41187375l38.45384344-366.34571812c4.30883719-40.87026 46.22577281-74.07102563 93.40104-74.07102563H709.10861844c47.27770219 0 89.19463781 33.20076563 93.503475 74.07102563l38.45384343 366.34571812c2.94041063 28.36924781-5.36076562 54.94719563-23.32497937 74.91283219zM622.43283219 711.27288688c-76.90900125 51.79797562-142.36104 61.25220281-179.65658063 25.85039625a91.58216156 91.58216156 0 0 1-10.92640218-12.82013719c59.25603281-13.65537656 222.10144969-60.93307781 213.27233906-166.52388469-3.78090281-44.65116281-34.457565-80.05822125-78.37461-90.24525281-48.22194281-11.558085-118.61581406 7.98205219-171.24902813 95.60601937-40.66013719 67.76207906-33.20076563 158.11633406 17.02128563 205.91671594 13.86681281 13.24038281 42.44487 33.20207906 87.93258562 33.20208 37.19179219 0 85.62911062-13.23644344 146.56350188-54.31682625 10.08459656-6.82768781 12.711135-20.48831719 5.98588219-30.57422719-6.82768781-10.188345-20.48306437-12.81488344-30.56897344-6.09488343z m-189.32093063-125.44218938c34.457565-57.25592344 75.53794781-77.32399406 107.47797563-77.32399406 5.67332437 0 11.02883719 0.63036938 16.07179218 1.78473281 25.32114938 5.88476063 42.342435 25.53258562 44.54872688 51.058605 5.46320156 65.56104-126.39168281 108.42746906-185.96158594 121.45247625-5.67332437-31.308345 0-67.34183344 17.86309125-96.97182z m0 0"  p-id="6983"></path></svg>
                                        <span>E-Commerce Solutions</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};