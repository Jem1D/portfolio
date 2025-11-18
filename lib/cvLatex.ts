export const cvLatex = String.raw`

%-------------------------
% Resume in LaTeX
% Author : Jemil Dharia
% Single-page layout, reduced margins
%------------------------

\documentclass[letterpaper,10pt]{article}

\usepackage[english]{babel}
\usepackage{ragged2e}

%% Reduced margins
\usepackage[a4paper,top=0.3in,bottom=0.4in,left=0.4in,right=0.4in]{geometry}
\usepackage{latexsym}
\usepackage[usenames,dvipsnames]{color}
\usepackage{verbatim}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}
\usepackage{fancyhdr}
\usepackage[english]{babel}
\usepackage{tabularx}
\input{glyphtounicode}

\pagestyle{fancy}
\fancyhf{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}

\urlstyle{same}
\raggedbottom
% \raggedright
\justifying
\setlength{\tabcolsep}{0in}

%% Section formatting
\usepackage{titlesec}
\titleformat{\section}
  {\scshape\raggedright\large}{}{0em}{}[\color{black}\titlerule]
\titlespacing*{\section}{0pt}{8pt plus 2pt minus 2pt}{6pt}


%% Commands
\newcommand{\resumeItem}[1]{\item\small{#1 \vspace{-2pt}}}
\newcommand{\resumeSubheading}[4]{
  \vspace{-2pt}\item
    \begin{tabularx}{\textwidth}[t]{Xr}
      \textbf{#1} & #2 \\
      \textit{\small #3} & \textit{\small #4} \\
    \end{tabularx}\vspace{-7pt}
}
\newcommand{\resumeProjectHeading}[2]{
  \item
  \begin{tabularx}{\textwidth}[t]{Xr}
    \small #1 & #2 \\
  \end{tabularx}\vspace{-7pt}
}
\newcommand{\resumeItemListStart}{\begin{itemize}[leftmargin=0.15in]}
\newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-5pt}}
\newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=0in, label={}]}
\newcommand{\resumeSubHeadingListEnd}{\end{itemize}}

\begin{document}

%% Header
\begin{center}
    {\Huge \scshape Jemil Dharia} \\ \vspace{1.5pt}
    \href{mailto:dhariajemil@gmail.com}{dhariajemil@gmail.com} $\vert$ +1-602-802-9536 \\
    \vspace{0.5pt}
    \href{https://www.linkedin.com/in/jemildharia/}{linkedin.com/in/jemildharia} $\vert$ \href{https://github.com/Jem1D}{github.com/Jem1D} $\vert$ \href{https://jemil-portfolio.vercel.app}{jemil-portfolio.vercel.app}
\end{center}

%% Education
\section{Education}
\resumeSubHeadingListStart
  \resumeSubheading{Arizona State University}{Tempe, Arizona}{Master of Science in Computer Science, GPA: 3.94/4.00}{May 2026}
    \resumeItemListStart
        \resumeItem{Relevant Coursework: Foundations of Algorithms, Advanced Graphics, Cryptography, Statistical Machine Learning, Cloud Computing, Info Assurance \& Security}

    \resumeItemListEnd

  \resumeSubheading{Pandit Deendayal Energy University (PDEU)}{Gandhinagar, India}{Bachelor of Technology in Computer Engineering, CGPA: 9.91/10.00}{August 2020 -- May 2024}
\resumeSubHeadingListEnd

%% Skills and Expertise
\section{Skills}
\textbf{Languages:} Python, C++, C, C\#, Java, JavaScript, HTML, CSS, Matlab\\
\textbf{Web Dev:} NodeJS, ReactJS, NextJS, Express.js, Flask, FastAPI, RESTful APIs\\
\textbf{Cloud, DevOps \& DBs:} AWS, Azure, Docker, CI/CD pipelines, Git, Firebase, PostgreSQL, MySQL, MongoDB Atlas\\
\textbf{Data Science, ML \& BI:} TensorFlow, Databricks, Spark, Pandas, NumPy, Matplotlib, Tableau, Power BI\\
\textbf{Core Competencies:} Agile/Scrum, Data Analysis \& Storytelling, Process Improvement, Leadership, Team Collaboration

%% Work Experience
\section{Technical Experience}
\resumeSubHeadingListStart

  \resumeSubheading{Data \& Web Engineering Intern}{Aasma Technology Solutions}{Ahmedabad, India}{January 2024 -- June 2024}
  \resumeItemListStart
    \resumeItem{Designed and devised the company's website using React.js for the frontend and Node.js for the backend containing 10+ pages, managing the database through Contentful, guaranteeing reduced page load times by 35\%.}
    \resumeItem{Integrated Contentful API directly into frontend, reducing API latency by 30\%, and contributed to CI/CD improvements with GitHub that enhanced deployment efficiency.}
    \resumeItem{Adhered to the Agile Software Development Life Cycle with weekly sprints, achieving a 100\% sprint completion rate.}
  \resumeItemListEnd

  \resumeSubheading{Software Development Intern}{Capgemini}{Gandhinagar, India}{June 2023 -- July 2023}
  \resumeItemListStart
    \resumeItem{Constructed a Python-Flask library to streamline 20+ ABHA APIs for healthcare records, reducing integration time by 30\%.}
    \resumeItem{Built a wrapper class as a reusable module linking the M1 (Registration) and M2 (Verification) ABHA APIs, achieving a 15\% improvement in API response efficiency and securing healthcare data protocol compliance.}
    \resumeItem{Led a 5-member team to unify Node.js and Python backends, improving system performance and data protocol compliance.}
    \resumeItem{Integrated Flask APIs into a Node.js-based UI to enhance usability and demonstrated project outcomes through presentations.}
  \resumeItemListEnd
\resumeSubHeadingListEnd



\section{Additional Experience}
\resumeSubHeadingListStart
  \resumeSubheading{XR Technical Internship -- Mesh Labs}{Arizona State University}{Tempe, Arizona}{August 2025 -- Present}
  \resumeItemListStart
    \resumeItem{Implemented and tested player labeling in Unity with Meta Quest headsets to validate clarity in multiplayer XR scenes.}
    \resumeItem{Evaluated immersive XR simulations to ensure consistency, usability, and smooth interaction across multiple environments.}
    \resumeItem{Assisted in developing multiplayer medical training features with Unity Netcode and XR Toolkit, leveraging C\# scripting to build scalable, maintainable functionality for real-time collaboration.}
  \resumeItemListEnd

  \resumeSubheading{Teaching Aide -- Physics Lab}{Arizona State University}{Tempe, Arizona}{August 2024 -- May 2025}
  \resumeItemListStart
    \resumeItem{Oversaw physics laboratory operations, including equipment setup, safety compliance, and troubleshooting technical issues.}
    \resumeItem{Provided individualized assistance to a class of 72 students, enhancing student lab performance scores by 20\%.}
    \resumeItem{Analyzed 500+ lab reports per semester, identifying patterns using data-driven insights and enhancing lab performance by 25\%.}
  \resumeItemListEnd

\resumeSubHeadingListEnd
  
%% Projects
\section{Projects}
\resumeSubHeadingListStart
  \resumeProjectHeading{ASU-ccessful Match -- Zoom Campus Spark Challenge (\href{https://asu-ccessful-match.vercel.app/}{Link})}{May 2025}
  \resumeItemListStart
    \resumeItem{Developed a peer-learning platform leveraging the Zoom API to automate virtual study session creation and management, incorporating personalized peer/tutor matching, one-click automated scheduling, and resource sharing.}
    \resumeItem{Engineered an expert eligibility feature using the Zoom Poll API, qualifying students scoring 80\%+ on polls to host peer tutoring sessions and facilitate knowledge sharing.}
  \resumeItemListEnd

  \resumeProjectHeading{GenAI-LLM Email Generator using LangChain, Groq (\href{https://github.com/Jem1D/GenAI-LLM-email-generator}{Link})}{March 2025 -- April 2025}
  \resumeItemListStart
    \resumeItem{Conceived and deployed a generative AI system to automate personalized email creation by scraping job descriptions, optimizing extraction to exclude headers and non-relevant sections.}
    \resumeItem{Leveraged LangChain, Groq LLM, and ChromaDB for RAG-based semantic retrieval, achieving an 80\% reduction in drafting time across 50+ test cases via dynamic prompt tuning and portfolio integration.}
  \resumeItemListEnd

  \resumeProjectHeading{Cloud-Based ETL Pipeline using AWS and Apache Airflow}{March 2025 -- April 2025}
  \resumeItemListStart
    \resumeItem{Built and deployed a cloud-based ETL pipeline using Apache Airflow to extract 5-day/3-hour forecast weather data, storing 400 records in Amazon S3 and orchestrating DAG runs during development.}
    \resumeItem{Transformed data using AWS Glue and loaded into Amazon Redshift for SQL-based forecasting and analysis, improving KPI tracking by 40\% and achieving 99\% DAG run success.}
  \resumeItemListEnd

  % \resumeProjectHeading{Classification and Segmentation of PV Satellite Images}{February 2024 -- May 2024}
  % \resumeItemListStart
  %   \resumeItem{Devised a deep learning pipeline on PV dataset using U-Net for pixel-level segmentation and ResNet18 for binary classification, achieving a Dice score of 0.82 and 92\% accuracy across satellite imagery datasets.}
  %   \resumeItem{Implemented scaled masking and thresholding techniques to distinguish solar panels, enabling precise area estimation, and proposed architectures including SeResNet and YOLOv8 to improve classification robustness for large-scale renewable energy applications.}
  % \resumeItemListEnd
\resumeSubHeadingListEnd

\end{document}


`;