import React from 'react';
import { useNavigate } from 'react-router-dom';
// import CommonView from 'slide_app/CommonView';
import ViewContainer from "slide_app/ViewContainer";
// const ViewContainer = React.lazy(() => import("slide_app/ViewContainer"));



const Preview = () => {
    const previewData = localStorage.getItem('preview');
    const navigate = useNavigate();

    if (!previewData) {
        return <div>No preview data available</div>;
    }

    const slideData = JSON.parse(previewData);

    const handleClose = () => {
        console.log('Close button clicked');
        navigate('/');
    };

    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            <button
                onClick={handleClose}
                style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'none',
                    border: 'none',
                    fontSize: '24px',
                    cursor: 'pointer',
                    zIndex: 1000
                }}
            >
                &#x2715;
            </button>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                {/* <CommonView
                    viewType="FULLSCREEN"
                    data={slideData}
                    editable={false}
                /> */}
                <ViewContainer items={slideData} />
            </div>
        </div>
    );
};

export default Preview;
