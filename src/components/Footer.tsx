import React from "react";

export const Footer: React.FC = () :JSX.Element => {
    return (
        <footer className={'page-footer indigo footer-fixed'}>
            <div className="footer-copyright pX-3">
                © 2021 TypeScript  Course
                <a className="grey-text text-lighten-4 right" href="https://github.com/amaratovich" target={"_blank"}>GitHub Link</a>
            </div>
        </footer>
    )
}