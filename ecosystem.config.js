module.exports = {
    apps: [
        {
            name: 'matrixplf',
            script: 'npm',
            args: 'run start',
            exec_mode: 'fork',
            instances: 1,
            watch: false,
            env: {
                NODE_ENV: 'production',
                PORT: 3000
            },
            log_file: '/var/log/matrixplf.log',
            error_file: '/var/log/matrixplf-error.log',
            merge_logs: true
        }
    ]
}