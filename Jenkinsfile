pipeline {
    agent any

    tools {
        nodejs 'NodeJS' // Use preconfigured Node.js installation in Jenkins
    }

    parameters {
        string(name: 'BRANCH_NAME', defaultValue: 'main', description: 'Branch to build')
        string(name: 'BUILD_ENV', defaultValue: 'dev', description: 'Build environment (dev/prod)')
        string(name: 'STUDENT_NAME', defaultValue: 'Muneeb Ur Rehman', description: 'Enter your full name')
    }

    environment {
        APP_VERSION = "1.0.0"
    }

    stages {

        stage('Install Dependencies') {
            steps {
                echo "Installing Node.js dependencies..."
                sh "npm install"
            }
        }

        stage('Build') {
            steps {
                echo "Building Calculator App v${APP_VERSION} on branch ${params.BRANCH_NAME}"
            }
        }

        stage('Unit Test') {
            when {
                expression { return params.BUILD_ENV == 'dev' }
            }
            steps {
                echo 'Running unit tests with Jest...'
                
                // Debug step (optional) - lists all files so we can confirm calculator.test.js exists
                sh "ls -R"

                // Run Jest tests
                sh "npm test"
            }
        }

        stage('Deploy') {
            steps {
                echo 'Simulating deployment of Node.js Calculator App...'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up workspace...'
            // deleteDir() // Uncomment if you want to clean workspace after build
        }

        success {
            echo "✅ Pipeline executed successfully for ${params.STUDENT_NAME}!"
        }

        failure {
            echo "❌ Pipeline failed for ${params.STUDENT_NAME}."
        }
    }
}
