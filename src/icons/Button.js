const logo = ({ width, height, fill }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="15.4545" height="15.4545" rx="3" fill={fill} />
            <rect y="18.5455" width="15.4545" height="15.4545" rx="3" fill={fill} />
            <rect x="18.5454" width="15.4545" height="15.4545" rx="3" fill={fill} />
            <rect x="18.5454" y="18.5455" width="15.4545" height="15.4545" rx="3" fill={fill} />
        </svg>
    )
};

export default logo;