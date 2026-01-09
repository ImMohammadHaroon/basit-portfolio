export const projectsData = [
    {
        id: 1,
        title: "Secure Vault App",
        slug: "secure-vault-app",
        category: "Flutter",
        shortDescription: "A comprehensive media security application for encrypted storage of sensitive photos, videos, and documents.",
        description: "Secure Vault App is a state-of-the-art mobile application designed to provide users with a safe and encrypted environment for storing their most sensitive media files. Built with Flutter and leveraging industry-standard encryption algorithms, this app ensures that your private photos, videos, and documents remain completely secure and accessible only to you.",

        features: [
            {
                title: "Military-Grade Encryption",
                description: "All files are encrypted using industry-standard AES-256 encryption, ensuring maximum security for your sensitive data."
            },
            {
                title: "Hive Local Database",
                description: "Utilizes Hive for lightning-fast local storage, enabling offline access and superior performance without internet dependency."
            },
            {
                title: "Biometric Authentication",
                description: "Secure access with PIN code or biometric authentication (fingerprint/face recognition) for an additional layer of security."
            },
            {
                title: "Intuitive Gallery Interface",
                description: "Browse your encrypted media with a beautiful, user-friendly gallery interface that makes organization effortless."
            },
            {
                title: "Multi-Format Support",
                description: "Store and view various media formats including images (JPEG, PNG, GIF), videos (MP4, AVI), and documents (PDF, DOCX)."
            },
            {
                title: "Fast Search Capabilities",
                description: "Quickly find your files with powerful search functionality that works seamlessly even with encrypted content."
            }
        ],

        technologies: ["Flutter", "Dart", "Hive Database", "AES Encryption", "Biometric Auth", "Material Design"],

        challenges: [
            {
                title: "Performance Optimization",
                challenge: "Encrypting and decrypting large video files while maintaining smooth app performance was a significant challenge.",
                solution: "Implemented chunked encryption/decryption with background isolates to prevent UI blocking, and added caching mechanisms for frequently accessed files."
            },
            {
                title: "Secure Key Management",
                challenge: "Storing encryption keys securely while allowing seamless user access posed a security vs. usability dilemma.",
                solution: "Used Flutter Secure Storage combined with user-generated PINs and biometric authentication to create a multi-layered security approach."
            }
        ],

        githubLink: "https://github.com/basit-ali/secure-vault", // Placeholder
        liveLink: null,
        thumbnail: "/images/secure-vault-thumb.jpg", // Will be generated
        images: [
            "/images/secure-vault-1.jpg",
            "/images/secure-vault-2.jpg",
            "/images/secure-vault-3.jpg",
            "/images/secure-vault-4.jpg"
        ]
    },

    {
        id: 2,
        title: "Bookkeeping App",
        slug: "bookkeeping-app",
        category: "Flutter",
        shortDescription: "A full-featured accounting application for small businesses to manage financial records with real-time cloud synchronization.",
        description: "Bookkeeping App is a comprehensive financial management solution designed specifically for small businesses and freelancers. With real-time cloud synchronization via Firebase Firestore, this application enables users to track income, expenses, and generate detailed financial reports from anywhere, on any device.",

        features: [
            {
                title: "Real-Time Transaction Tracking",
                description: "Record and categorize financial transactions instantly with automatic synchronization across all your devices."
            },
            {
                title: "Firebase Cloud Integration",
                description: "All your financial data is securely stored in Firebase Firestore, ensuring data safety and accessibility from anywhere."
            },
            {
                title: "Multi-Device Synchronization",
                description: "Seamlessly switch between devices without losing any data. Changes sync in real-time across all your logged-in devices."
            },
            {
                title: "Income & Expense Management",
                description: "Easily categorize and track all income and expenses with customizable categories tailored to your business needs."
            },
            {
                title: "Visual Reports & Charts",
                description: "Gain insights into your financial health with beautiful, interactive charts and detailed breakdown reports."
            },
            {
                title: "Export Functionality",
                description: "Export your financial reports in multiple formats (PDF, Excel) for tax preparation or sharing with accountants."
            },
            {
                title: "User Authentication",
                description: "Secure multi-user support with Firebase Authentication, allowing different access levels for team members."
            }
        ],

        technologies: ["Flutter", "Dart", "Firebase", "Cloud Firestore", "Firebase Auth", "Charts", "PDF Generation", "Responsive UI"],

        challenges: [
            {
                title: "Real-Time Data Synchronization",
                challenge: "Ensuring consistent data across multiple devices while handling offline scenarios and conflict resolution.",
                solution: "Implemented Firestore's real-time listeners with local caching, and created a conflict resolution strategy that prioritizes the most recent timestamp."
            },
            {
                title: "Complex Report Generation",
                challenge: "Generating detailed financial reports with charts while maintaining app performance, especially with large datasets.",
                solution: "Used pagination for loading historical data, implemented data aggregation on the backend using Cloud Functions, and cached report data locally."
            },
            {
                title: "Multi-Currency Support",
                challenge: "Supporting multiple currencies with real-time exchange rates for international businesses.",
                solution: "Integrated a currency exchange API and implemented a caching mechanism to reduce API calls while keeping rates reasonably current."
            }
        ],

        githubLink: "https://github.com/basit-ali/bookkeeping-app", // Placeholder
        liveLink: null,
        thumbnail: "/images/bookkeeping-thumb.jpg", // Will be generated
        images: [
            "/images/bookkeeping-1.jpg",
            "/images/bookkeeping-2.jpg",
            "/images/bookkeeping-3.jpg",
            "/images/bookkeeping-4.jpg"
        ]
    }
];

export const getProjectBySlug = (slug) => {
    return projectsData.find(project => project.slug === slug);
};
