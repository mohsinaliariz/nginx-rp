Prereq: docker.io and dockercompose must be installed on the instance
Step 1: Deploy nginxreverse-proxy
    cd nginx-rp
    docker-compose up -d --build

Step 2:update proxy paths configured in proxy.conf
    cd reverse-proxy/nginx-conf
    vi proxy.conf

Step 3: update revers-proxy
    docker-compose up -d --build reverse-proxy
