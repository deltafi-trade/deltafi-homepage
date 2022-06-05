{
  imageTag:: error 'imageTag is not set',
  domainName:: error 'domainName is not set',
  replicas:: 2,

  local dockerRegistry = '077918681028.dkr.ecr.us-west-2.amazonaws.com',
  local namespace = 'deltafi-homepage',
  local appName = 'deltafi-homepage',

  local tolerations = [
    {
      key: 'arch',
      operator: 'Equal',
      value: 'arm64',
      effect: 'NoSchedule',
    },
  ],

  local nodeSelector = {
    'kubernetes.io/arch': 'arm64',
  },

  apiVersion: 'v1',
  kind: 'List',
  items: [
    {
      apiVersion: 'apps/v1',
      kind: 'Deployment',
      metadata: {
        name: appName,
        namespace: namespace,
      },
      spec: {
        selector: {
          matchLabels: {
            app: appName,
          },
        },
        replicas: $.replicas,
        template: {
          metadata: {
            labels: {
              app: appName,
            },
          },
          spec: {
            containers: [
              {
                image: std.format('%s/deltafi-homepage:%s', [dockerRegistry, $.imageTag]),
                name: 'main',
                ports: [
                  {
                    containerPort: 80,
                  },
                ],
              },
            ],
            tolerations: tolerations,
            nodeSelector: nodeSelector,
          },
        },
      },
    },
    {
      apiVersion: 'v1',
      kind: 'Service',
      metadata: {
        name: appName,
        namespace: namespace,
      },
      spec: {
        ports: [
          {
            port: 80,
            targetPort: 80,
            protocol: 'TCP',
          },
        ],
        selector: {
          app: appName,
        },
      },
    },
    {
      apiVersion: 'networking.k8s.io/v1',
      kind: 'Ingress',
      metadata: {
        name: 'deltafi-homepage',
        namespace: namespace,
        annotations: {
          'cert-manager.io/cluster-issuer': 'letsencrypt-prod',
        },
      },
      spec: {
        ingressClassName: 'nginx',
        tls: [
          {
            hosts: [
              $.domainName,
            ],
            secretName: 'deltafi-homepage-tls',
          },
        ],
        rules: [
          {
            host: $.domainName,
            http: {
              paths: [
                {
                  path: '/',
                  pathType: 'Prefix',
                  backend: {
                    service: {
                      name: appName,
                      port: {
                        number: 80,
                      },
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
}
