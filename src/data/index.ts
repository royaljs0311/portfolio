// import mui from "../assets/mui.svg";
import react from "../assets/re.svg";
import ts from "../assets/ts.svg";
import next from "../assets/next.svg";
// import mysql from "../assets/mysql.svg";
import js from "../assets/js.svg";
import tw from "../assets/tail.svg";
// import vite from "../assets/vite.svg";
import three from "../assets/three.svg";
import scss from "../assets/scss.svg";
import attendium from "../assets/attendium.png";
import luminelle from "../assets/luminelle.png";
import videocall from "../assets/videocall.webp";
import voltfinder from "../assets/voltfinder.png";
import firebase from "../assets/firebase.svg";
// import hostinger from "../assets/hostinger.svg";
// import wordpress from "../assets/wordpress.svg";
import webrtc from "../assets/webrtc.svg";
import code from "../assets/code.svg";
// import link from "../assets/link.svg";
import git from "../assets/git.svg";
import node from "../assets/nodejs.svg";
import nest from "../assets/nestjs.svg";
import postgresql from "../assets/postgresql.svg";
import aws from "../assets/aws.svg";
import express from "../assets/express.svg";
import redux from "../assets/redux.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";

import captiwate from "../assets/captiwate.svg";
import futurebox from "../assets/futurebox.svg";

export const links = [
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export const heroContent = {
    title: "Welcome to My Portfolio",
    main: "Always creating Beautiful & Functional Web Experiences",
    description:
        "I'm Royal, Full Stack JavaScript Developer & this is my corner of the web!",
};

export const projects = [
    {
        img: attendium,
        title: "Attendeum",
        description:
            "Event Management Platform",
        codebaseUrl: "",
        liveUrl: "https://attendium.com/",
        techStack: [
            { icon: next, name: "Next.js" },
            { icon: ts, name: "Typescript" },
            { icon: node, name: "Node.js" },
            { icon: nest, name: "Nest.js" },
            { icon: postgresql, name: "PostgreSQL" },
            { icon: aws, name: "AWS" },
        ],
    },
    {
        img: luminelle,
        title: "Luminelle",
        description:
            "Natural Skincare Brand Platform",
        codebaseUrl: "",
        liveUrl: "https://luminelle.org/",
        techStack: [
            { icon: react, name: "React" },
            { icon: ts, name: "Typescript" },
            { icon: node, name: "Node.js" },
            { icon: express, name: "Express.js" },
            { icon: postgresql, name: "PostgreSQL" },
            { icon: aws, name: "AWS" },
        ],
    },
    {
        img: voltfinder,
        title: "More relevant EV charger finder",
        description:
            "A web application for finding the best electric car charging stations in Hungary",
        codebaseUrl: "https://github.com/royaljs0311/voltfinder",
        liveUrl: "https://voltfinder.hu/",
        techStack: [
            { icon: react, name: "React" },
            { icon: ts, name: "Typescript" },
            { icon: node, name: "Node.js" },
            { icon: nest, name: "Nest.js" },
            { icon: postgresql, name: "PostgreSQL" },
        ],
    },
    {
        img: videocall,
        title: "Video Call App",
        description:
            "A video call app that allows users to make video calls with their friends and family in a P2P style. It uses WebRTC for the video streaming and Firebase for the backend.",
        codebaseUrl: "https://github.com/royaljs0311/videoCall",
        liveUrl: "https://soloconvo.vercel.app/",
        techStack: [
            { icon: ts, name: "Typescript" },
            { icon: react, name: "React" },
            { icon: firebase, name: "Firebase" },
            { icon: webrtc, name: "WebRTC" },
        ],
    }
];

export const aboutMe = [
    "I constantly try to improve my tech stack.",
    "Open communication & collaboration is my priority.",
    "Always open to new opportunities and challenges.",
];

export const experience = [
    {
        title: "Software Developer",
        description: "Full-stack development on marketing technology platform.",
        img: captiwate,
        imgClassName: "experience-photo-1",
    },
    {
        title: "Software Developer",
        description:
            "Development of CivicTech platform with mapping solutions and analytics dashboards.",
        img: futurebox,
        imgClassName: "experience-photo-2",
    },
    {
        title: "Freelance",
        description:
            "Working on freelance projects for various clients including international companies and local startups.",
        img: code,
        imgClassName: "experience-photo-3",
    },
];

export const techStack = [
    { icon: scss, name: "SCSS" },
    { icon: html, name: "HTML" },
    { icon: css, name: "CSS" },
    { icon: tw, name: "Tailwind CSS" },
    { icon: three, name: "Three.js" },
    { icon: redux, name: "Redux" },
    { icon: react, name: "React" },
    { icon: next, name: "Next.js" },
    { icon: ts, name: "Typescript" },
    { icon: js, name: "JavaScript" },
];

export const socials = [
    {
        icon: git,
        href: "https://github.com/royaljs0311",
        name: "GitHub",
    }
];
