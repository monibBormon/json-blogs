import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
// import loaderSvg from '../../assests/image/loader.svg'

const FullScreenLoader = () => {
    const loader = useSelector((state)=>state.settings.loader)
    return (
        <Fragment>
            <div className={loader+" LoadingOverlay"}>
                {/* <img className='w-20 h-[100%] z-[100px] mx-auto transform top-[50%] left-[50%] -translate-y-[50%] fixed -translate-x-[50%]' src={loaderSvg} alt="loading.." /> */}
                <div className="Line-Progress">
                    <div className="indeterminate"></div>
                </div>
            </div>
        </Fragment>
    );
};

export default FullScreenLoader;