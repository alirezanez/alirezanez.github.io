// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Publications/";
          },
        },{id: "nav-skills",
          title: "Skills",
          description: "My certifications, and research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Skills/";
          },
        },{id: "nav-awards",
          title: "Awards",
          description: "Academic excellence, research recognition, and professional achievements",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Awards/";
          },
        },{id: "nav-experience",
          title: "Experience",
          description: "Professional work experience and volunteer contributions",
          section: "Navigation",
          handler: () => {
            window.location.href = "/experience/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum Vitae - Alireza Nezamzadeh",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-other-activities",
              title: "Other Activities",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/Other_Activities/";
              },
            },{id: "dropdown-photography",
              title: "Photography",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/Photography/";
              },
            },{id: "awards-ranked-3rd-m-sc-student-in-control-engineering",
          title: 'Ranked 3rd M.Sc. Student in Control Engineering',
          description: "Academic excellence in Control Engineering, Isfahan University of Technology.",
          section: "Awards",handler: () => {
              window.location.href = "/awards/award1_msc_ranking/";
            },},{id: "awards-ranked-1st-b-sc-student-in-electrical-power-engineering",
          title: 'Ranked 1st B.Sc. Student in Electrical Power Engineering',
          description: "Highest academic standing in Electrical Power Engineering program.",
          section: "Awards",handler: () => {
              window.location.href = "/awards/award2_bsc_ranking/";
            },},{id: "awards-best-paper-award-30th-electrical-safety-conference",
          title: 'Best Paper Award – 30th Electrical Safety Conference',
          description: "Recognition for research on human factors in electrical safety.",
          section: "Awards",handler: () => {
              window.location.href = "/awards/award3_best_paper/";
            },},{id: "awards-direct-admission-to-m-sc-program-in-control-engineering",
          title: 'Direct Admission to M.Sc. Program in Control Engineering',
          description: "Exceptional undergraduate academic performance recognition.",
          section: "Awards",handler: () => {
              window.location.href = "/awards/award4_direct_admission/";
            },},{id: "experiences-teaching-assistant",
          title: 'Teaching Assistant',
          description: "2020 - 2022 · Taught control systems, adaptive control, and neural networks.",
          section: "Experiences",handler: () => {
              window.location.href = "/experiences/exp1_teaching_assistant/";
            },},{id: "experiences-research-assistant-nonlinear-control-lab",
          title: 'Research Assistant - Nonlinear Control Lab',
          description: "Nov 2023 - Dec 2025 · Piezoelectric actuators, inverted pendulum, and MIMO systems control.",
          section: "Experiences",handler: () => {
              window.location.href = "/experiences/exp2_research_assistant_isfahan/";
            },},{id: "experiences-research-assistant",
          title: 'Research Assistant',
          description: "Jan 2026 - Present · Sustainable energy research and control strategy design at NTNU.",
          section: "Experiences",handler: () => {
              window.location.href = "/experiences/exp3_research_assistant_ntnu/";
            },},{id: "experiences-assistant-manager",
          title: 'Assistant Manager',
          description: "Aug 2022 - Oct 2023 · Power transmission safety and HSE management at EREC.",
          section: "Experiences",handler: () => {
              window.location.href = "/experiences/exp4_assistant_manager_erec/";
            },},{id: "experiences-student-internship",
          title: 'Student Internship',
          description: "Jul 2018 - Aug 2018 · Industrial automation and PLC programming at Mobarakeh Steel Company.",
          section: "Experiences",handler: () => {
              window.location.href = "/experiences/exp5_student_internship_mobarakeh/";
            },},{id: "experiences-peer-reviewer",
          title: 'Peer Reviewer',
          description: "2026 - Present · Independent peer review for IEEE Transactions on Industrial Electronics",
          section: "Experiences",handler: () => {
              window.location.href = "/experiences/vol1_peer_reviewer/";
            },},{id: "experiences-team-member-indoor-air-quality-project",
          title: 'Team Member - Indoor Air Quality Project',
          description: "Jun 2026 - Jul 2026 · Multidisciplinary team evaluating air quality in clinical settings",
          section: "Experiences",handler: () => {
              window.location.href = "/experiences/vol2_hospital_team/";
            },},{id: "experiences-member-electrical-engineering-student-scientific-association",
          title: 'Member - Electrical Engineering Student Scientific Association',
          description: "Sep 2018 - Jul 2019 · Active member of scientific association at Shahrekord University",
          section: "Experiences",handler: () => {
              window.location.href = "/experiences/vol3_electrical_society/";
            },},{id: "experiences-editorial-board-member",
          title: 'Editorial Board Member',
          description: "Dec 2018 - Apr 2019 · Served on the editorial board of Avesta Scientific Journal",
          section: "Experiences",handler: () => {
              window.location.href = "/experiences/vol4_editorial_board/";
            },},{id: "experiences-volunteer-team-lead",
          title: 'Volunteer Team Lead',
          description: "Aug 2022 - Oct 2023 · Humanitarian and relief activities with Iranian Red Crescent Society.",
          section: "Experiences",handler: () => {
              window.location.href = "/experiences/vol5_red_crescent/";
            },},];
