"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[5805],{4674:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>t});var s=l(74848),o=l(28453);const c={sidebar_position:3,edition:"ce"},d="Kubernetes Helm \u5b89\u88c5",i={id:"getting-started/cmp/quickstart-k8s-helm",title:"Kubernetes Helm \u5b89\u88c5",description:"\u4f7f\u7528 Helm \u5728 Kubernetes \u4e0a\u90e8\u7f72 Cloudpods CMP \u591a\u4e91\u7ba1\u7406\u7248\u672c",source:"@site/docs/getting-started/cmp/quickstart-k8s-helm.md",sourceDirName:"getting-started/cmp",slug:"/getting-started/cmp/quickstart-k8s-helm",permalink:"/docs/getting-started/cmp/quickstart-k8s-helm",draft:!1,unlisted:!1,editUrl:"https://github.com/yunionio/website/tree/master/docs/getting-started/cmp/quickstart-k8s-helm.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,edition:"ce"},sidebar:"tutorialSidebar",previous:{title:"Docker Compose \u5feb\u901f\u5b89\u88c5",permalink:"/docs/getting-started/cmp/quickstart-docker-compose"},next:{title:"\u7269\u7406\u673a\u7ba1\u7406",permalink:"/docs/getting-started/baremetal/"}},r={},t=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"clone chart",id:"clone-chart",level:3},{value:"\u6d4b\u8bd5\u73af\u5883\u5b89\u88c5",id:"\u6d4b\u8bd5\u73af\u5883\u5b89\u88c5",level:3},{value:"\u751f\u4ea7\u73af\u5883\u5b89\u88c5",id:"\u751f\u4ea7\u73af\u5883\u5b89\u88c5",level:3},{value:"\u67e5\u770b\u90e8\u7f72\u670d\u52a1\u72b6\u6001",id:"\u67e5\u770b\u90e8\u7f72\u670d\u52a1\u72b6\u6001",level:2},{value:"\u521b\u5efa\u9ed8\u8ba4\u7ba1\u7406\u7528\u6237",id:"\u521b\u5efa\u9ed8\u8ba4\u7ba1\u7406\u7528\u6237",level:2},{value:"\u521b\u5efa\u8d26\u53f7\u767b\u5f55 Web UI",id:"\u521b\u5efa\u8d26\u53f7\u767b\u5f55-web-ui",level:3},{value:"\u8fdb\u5165 climc \u547d\u4ee4\u884c pod",id:"\u8fdb\u5165-climc-\u547d\u4ee4\u884c-pod",level:3},{value:"\u521b\u5efa\u7528\u6237",id:"\u521b\u5efa\u7528\u6237",level:3},{value:"\u8bbf\u95ee\u524d\u7aef",id:"\u8bbf\u95ee\u524d\u7aef",level:2},{value:"\u4fee\u6539 api_server \u63a5\u5165\u7aef",id:"\u4fee\u6539-api_server-\u63a5\u5165\u7aef",level:2},{value:"\u5347\u7ea7",id:"\u5347\u7ea7",level:2},{value:"\u5220\u9664",id:"\u5220\u9664",level:2},{value:"\u5176\u5b83\u95ee\u9898",id:"\u5176\u5b83\u95ee\u9898",level:2},{value:"1. onecloud namespace \u7f3a\u5c11 keystone, glance, region \u7b49 pod",id:"1-onecloud-namespace-\u7f3a\u5c11-keystone-glance-region-\u7b49-pod",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"kubernetes-helm-\u5b89\u88c5",children:"Kubernetes Helm \u5b89\u88c5"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"https://helm.sh/",children:"Helm"})," \u5728 Kubernetes \u4e0a\u90e8\u7f72 Cloudpods CMP \u591a\u4e91\u7ba1\u7406\u7248\u672c"]}),"\n",(0,s.jsxs)(n.admonition,{title:"\u6ce8\u610f",type:"tip",children:[(0,s.jsx)(n.p,{children:"\u8be5\u65b9\u6848\u901a\u8fc7 Helm \u5728\u5df2\u6709\u7684 Kubernetes \u96c6\u7fa4\u4e0a\u81ea\u52a8\u90e8\u7f72 Cloudpods \u591a\u4e91\u7ba1\u7406\u7248\u672c\u3002"}),(0,s.jsxs)(n.p,{children:["\u8be5\u90e8\u7f72\u65b9\u6cd5\u53ef\u80fd\u4f1a\u56e0\u4e3a\u4e0d\u540c Kubernetes \u53d1\u884c\u7248\u7684 CSI\uff0cCNI \u548c Ingress controller \u914d\u7f6e\u4e0d\u540c\u51fa\u73b0\u517c\u5bb9\u6027\u9519\u8bef\uff0c\u5982\u679c\u90e8\u7f72\u5931\u8d25\uff0c\u53c8\u60f3\u5feb\u901f\u4f53\u9a8c\u4ea7\u54c1\u529f\u80fd\uff0c\u5efa\u8bae\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"./quickstart-docker-compose",children:"Docker Compose \u5feb\u901f\u5b89\u88c5"})," \u7684\u65b9\u5f0f\u90e8\u7f72\u3002"]}),(0,s.jsx)(n.p,{children:"\u5df2\u7ecf\u9a8c\u8bc1\u8fc7\u7684Kubernetes\u53d1\u884c\u7248\u672c\u5305\u62ec\uff1a"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u963f\u91cc\u4e91 ACK"}),"\n",(0,s.jsx)(n.li,{children:"\u817e\u8baf\u4e91 TKE"}),"\n",(0,s.jsx)(n.li,{children:"Azure AKS"}),"\n",(0,s.jsx)(n.li,{children:"AWS ECS"}),"\n"]}),(0,s.jsx)(n.p,{children:"\u8be5\u90e8\u7f72\u65b9\u6cd5\u4ec5\u9002\u7528\u4e8e\u591a\u4e91\u7ba1\u7406\u529f\u80fd\u7684\u4f7f\u7528\uff0c\u6bd4\u5982\u7ba1\u7406\u516c\u6709\u4e91(aws, \u963f\u91cc\u4e91, \u817e\u8baf\u4e91\u7b49)\u6216\u8005\u5176\u5b83\u79c1\u6709\u4e91(zstack, openstack \u7b49)\uff0c\u65e0\u6cd5\u4f7f\u7528\u5185\u7f6e\u79c1\u6709\u4e91\u76f8\u5173\u529f\u80fd(\u56e0\u4e3a\u5185\u7f6e\u79c1\u6709\u4e91\u9700\u8981\u8282\u70b9\u4e0a\u9762\u5b89\u88c5\u914d\u7f6e qemu, openvswitch \u7b49\u5404\u79cd\u865a\u62df\u5316\u8f6f\u4ef6) \u3002"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u73af\u5883\u51c6\u5907",children:"\u73af\u5883\u51c6\u5907"}),"\n",(0,s.jsx)(n.p,{children:"Cloudpods \u76f8\u5173\u7684\u7ec4\u4ef6\u8fd0\u884c\u5728 Kubernetes \u4e4b\u4e0a\uff0c\u73af\u5883\u4ee5\u53ca\u76f8\u5173\u7684\u8f6f\u4ef6\u4f9d\u8d56\u5982\u4e0b:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Kubernetes \u96c6\u7fa4\u914d\u7f6e\u8981\u6c42:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Kubernetes \u7248\u672c: 1.15 ~ 1.24"}),"\n",(0,s.jsx)(n.li,{children:"\u7cfb\u7edf\u914d\u7f6e\uff1a\u81f3\u5c11 CPU 4\u6838, \u5185\u5b58 8G, \u8282\u70b9\u5b58\u50a8 100G"}),"\n",(0,s.jsx)(n.li,{children:"\u8282\u70b9\u9700\u8981\u80fd\u591f\u8bbf\u95ee\u516c\u7f51"}),"\n",(0,s.jsx)(n.li,{children:"\u63d0\u4f9b ingress controller"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u90e8 coredns \u89e3\u6790"}),"\n",(0,s.jsxs)(n.li,{children:["\u652f\u6301 Helm\uff0c\u5b89\u88c5 helm \u5de5\u5177\u8bf7\u53c2\u8003 ",(0,s.jsx)(n.a,{href:"https://helm.sh/docs/intro/install/",children:"https://helm.sh/docs/intro/install/"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"\u63d0\u4f9b Mysql \u6570\u636e\u5e93(\u53ef\u9009): \u53ef\u4ee5\u9009\u62e9\u4f7f\u7528\u8fde\u63a5\u7684\u6570\u636e\u5e93\u662f\u5728\u90e8\u7f72\u5728 Kubernetes \u96c6\u7fa4\u5185\u8fd8\u662f\u4f7f\u7528\u5916\u90e8\u7684\uff0c\u751f\u4ea7\u73af\u5883\u5efa\u8bae\u4f7f\u7528\u5916\u90e8\u5355\u72ec\u7ba1\u7406\u7684 Mysql (\u5982\u679c\u516c\u6709\u4e91RDS\u670d\u52a1)"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u90e8\u7f72",children:"\u90e8\u7f72"}),"\n",(0,s.jsx)(n.h3,{id:"clone-chart",children:"clone chart"}),"\n",(0,s.jsxs)(n.p,{children:["Cloudpods Helm Chart \u4f4d\u4e8e ",(0,s.jsx)(n.a,{href:"https://github.com/yunionio/ocboot",children:"https://github.com/yunionio/ocboot"})," \u4ed3\u5e93\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u4e0b\u8f7d\u5230\u672c\u5730\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ git clone -b release/3.11 https://github.com/yunionio/ocboot && cd charts/cloudpods\n"})}),"\n",(0,s.jsxs)(n.admonition,{title:"\u6ce8\u610f",type:"tip",children:[(0,s.jsxs)(n.p,{children:["\u63a5\u4e0b\u6765\u4f1a\u4f7f\u7528 helm \u5b89\u88c5 cloudpods chart\uff0c\u5728\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"helm install"})," \u7684\u65f6\u5019\u5fc5\u987b\u6307\u5b9a ",(0,s.jsx)(n.code,{children:"--namespace onecloud"}),"\uff0c\u4e0d\u80fd\u4f7f\u7528\u5176\u4ed6\u7684 namespace\u3002"]}),(0,s.jsx)(n.p,{children:"\u539f\u56e0\u662f operator \u670d\u52a1\u8fd8\u4e0d\u652f\u6301\u628a\u5e73\u53f0\u7684\u670d\u52a1\u90e8\u7f72\u5230\u5176\u4ed6 namespace \uff0c\u8fd9\u4e2a\u540e\u7eed\u4f1a\u6539\u8fdb\u3002"})]}),"\n",(0,s.jsx)(n.h3,{id:"\u6d4b\u8bd5\u73af\u5883\u5b89\u88c5",children:"\u6d4b\u8bd5\u73af\u5883\u5b89\u88c5"}),"\n",(0,s.jsx)(n.p,{children:"\u6d4b\u8bd5\u73af\u5883\u5b89\u88c5\u65b9\u6cd5\u5982\u4e0b\uff0c\u8be5\u65b9\u6cd5\u4f1a\u5728 Kubernetes \u96c6\u7fa4\u91cc\u90e8\u7f72 mysql \uff0clocal-path-provisioner CSI \u4f9d\u8d56\u63d2\u4ef6\uff0c\u4e0d\u9700\u8981\u8fde\u63a5\u96c6\u7fa4\u4e4b\u5916\u7684 mysql \u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u6ce8\u610f\u8fd9\u91cc\u7684 `--namespace onecloud` \u4e0d\u80fd\u6539\u6210\u5176\u4ed6\u7684\uff0c\u5fc5\u987b\u662f onecloud\n$ helm install --name-template default --namespace onecloud --debug  . -f values-dev.yaml  --create-namespace\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u751f\u4ea7\u73af\u5883\u5b89\u88c5",children:"\u751f\u4ea7\u73af\u5883\u5b89\u88c5"}),"\n",(0,s.jsx)(n.p,{children:"\u4e4b\u524d\u90e8\u7f72\u7684\u65b9\u6cd5\u4ec5\u9650\u6d4b\u8bd5\u4f7f\u7528\uff0c\u56e0\u4e3a\u4f9d\u8d56\u5c11\uff0c\u5b89\u88c5\u5feb\uff0c\u4f46\u5982\u679c\u7528\u4e8e\u751f\u4ea7\u73af\u5883\uff0c\u8bf7\u6839\u636e\u9700\u6c42\u4fee\u6539 ./values-prod.yaml \u91cc\u9762\u7684\u53c2\u6570\uff0c\u7136\u540e\u4f7f\u7528\u8be5\u6587\u4ef6\u521b\u5efa Helm Release \u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5efa\u8bae\u9700\u8981\u4fee\u6539\u7684\u5730\u65b9\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:'--- a/charts/cloudpods/values-prod.yaml\n+++ b/charts/cloudpods/values-prod.yaml\n localPathCSI:\n+  # \u6839\u636e k8s \u96c6\u7fa4\u7684 CSI \u90e8\u7f72\u60c5\u51b5\uff0c\u9009\u62e9\u662f\u5426\u8981\u90e8\u7f72\u9ed8\u8ba4\u7684 local-path CSI\n+  # \u5982\u679c k8s \u96c6\u7fa4\u5df2\u7ecf\u6709\u7a33\u5b9a\u7684 CSI \uff0c\u5c31\u53ef\u4ee5\u8bbe\u7f6e\u8fd9\u4e2a\u503c\u4e3a false \uff0c\u4e0d\u90e8\u7f72\u8be5\u7ec4\u4ef6\n   enabled: true\n   helperPod:\n     image: registry.cn-beijing.aliyuncs.com/yunionio/busybox:1.35.0\n@@ -60,11 +62,16 @@ localPathCSI:\n\n cluster:\n   mysql:\n+    # \u5916\u90e8 mysql \u5730\u5740\n     host: 1.2.3.4\n+    # \u5916\u90e8 mysql \u7aef\u53e3\n     port: 3306\n+    # \u5916\u90e8 mysql \u7528\u6237\uff0c\u9700\u8981\u7528\u5177\u5907 root \u6743\u9650\u7684\u7528\u6237\uff0c\u56e0\u4e3a cloudpods operator \u4f1a\u4e3a\u5176\u4ed6\u670d\u52a1\u521b\u5efa\u6570\u636e\u5e93\u7528\u6237\n     user: root\n+    # \u5916\u90e8 mysql \u5bc6\u7801\n     password: your-db-password\n     statefulset:\n+      # \u751f\u4ea7\u73af\u5883\u90e8\u7f72\u8fd9\u91cc\u9700\u8981\u8bbe\u7f6e\u6210 false \uff0c\u4e0d\u7136\u4f1a\u5728 k8s \u96c6\u7fa4\u91cc\u9762\u90e8\u7f72\u4e00\u4e2a mysql \uff0c\u7136\u540e\u8fde\u63a5\u4f7f\u7528\u8fd9\u4e2a statefulset mysql\n       enabled: false\n       image:\n         repository: "registry.cn-beijing.aliyuncs.com/yunionio/mysql"\n@@ -91,15 +98,20 @@ cluster:\n   # imageRepository defines default image registry\n   imageRepository: registry.cn-beijing.aliyuncs.com/yunion\n   # publicEndpoint is upstream ingress virtual ip address or DNS domain\n+  # \u96c6\u7fa4\u5916\u90e8\u53ef\u8bbf\u95ee\u7684\u57df\u540d\u6216\u8005 ip \u5730\u5740\n   publicEndpoint: foo.bar.com\n   # edition choose from:\n   # - ce: community edition\n   # - ee: enterprise edition\n+  # \u9009\u62e9\u90e8\u7f72 ce(\u5f00\u6e90) \u7248\u672c\n   edition: ce\n   # storageClass for stateful component\n+  # \u6709\u72b6\u6001\u670d\u52a1\u4f7f\u7528\u7684 storageClass\uff0c\u5982\u679c\u4e0d\u8bbe\u7f6e\u5c31\u4f1a\u4f7f\u7528 local-path CSI\n+  # \u8fd9\u4e2a\u53ef\u6839\u636e k8s \u96c6\u7fa4\u60c5\u51b5\u81ea\u884c\u8c03\u8282\n   storageClass: ""\n   ansibleserver:\n     service:\n+      # \u6307\u5b9a\u670d\u52a1\u66b4\u9732\u7684 nodePort\uff0c\u5982\u679c\u548c\u96c6\u7fa4\u5df2\u6709\u670d\u52a1\u51b2\u7a81\uff0c\u53ef\u4ee5\u4fee\u6539\n       nodePort: 30890\n   apiGateway:\n     apiService:\n@@ -193,6 +205,7 @@ cluster:\n     service:\n       nodePort: 30889\n\n+# \u8bbe\u7f6e ingress\n ingress:\n   enabled: true\n+  # \u8bbe\u7f6e ingress \u7684 className\uff0c\u6bd4\u5982\u96c6\u7fa4\u91cc\u9762\u4f7f\u7528 nginx-ingress-controller\n+  # \u8fd9\u91cc\u7684 className \u5c31\u5199 nginx\n+  # className: nginx\n   className: ""\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u4fee\u6539\u5b8c values-prod.yaml \u6587\u4ef6\u540e\uff0c\u7528\u4ee5\u4e0b\u547d\u4ee4\u90e8\u7f72\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u6ce8\u610f\u8fd9\u91cc\u7684 `--namespace onecloud` \u4e0d\u80fd\u6539\u6210\u5176\u4ed6\u7684\uff0c\u5fc5\u987b\u662f onecloud\n$ helm install --name-template default --namespace onecloud . -f values-prod.yaml  --create-namespace\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u67e5\u770b\u90e8\u7f72\u670d\u52a1\u72b6\u6001",children:"\u67e5\u770b\u90e8\u7f72\u670d\u52a1\u72b6\u6001"}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528 helm install \u5b89\u88c5\u5b8c cloudpods chart \u540e\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u90e8\u7f72\u7684 pod \u72b6\u6001\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u6b63\u5e38\u8fd0\u884c\u60c5\u51b5\u4e0b\uff0c\u5728 onecloud namespace \u4e0b\u4f1a\u6709\u8fd9\u4e9b pod\n$ kubectl get pods -n onecloud\nNAME                                               READY   STATUS    RESTARTS   AGE\ndefault-cloudpods-ansibleserver-779bcbc875-nzj6k   1/1     Running   0          140m\ndefault-cloudpods-apigateway-7877c64f5c-vljrs      1/1     Running   0          140m\ndefault-cloudpods-climc-6f4bf8c474-nj276           1/1     Running   0          139m\ndefault-cloudpods-cloudevent-79c894bbfc-zdqcs      1/1     Running   0          139m\ndefault-cloudpods-cloudid-67c7894db7-86czj         1/1     Running   0          139m\ndefault-cloudpods-cloudmon-5cd9866bdf-c27fc        1/1     Running   0          68m\ndefault-cloudpods-cloudproxy-6679d94fc7-gm5tx      1/1     Running   0          139m\ndefault-cloudpods-devtool-6db6f4d454-ldw69         1/1     Running   0          139m\ndefault-cloudpods-esxi-agent-7bcc56987b-lgpnf      1/1     Running   0          139m\ndefault-cloudpods-etcd-q8j5c29tm2                  1/1     Running   0          145m\ndefault-cloudpods-glance-7547c455d5-fnzqq          1/1     Running   0          140m\ndefault-cloudpods-influxdb-c9947bdc8-x8xth         1/1     Running   0          139m\ndefault-cloudpods-keystone-6cc64bdcc7-xhh7m        1/1     Running   0          145m\ndefault-cloudpods-kubeserver-5544d59c98-l9d74      1/1     Running   0          140m\ndefault-cloudpods-logger-8f56cd9b5-f9kbp           1/1     Running   0          139m\ndefault-cloudpods-monitor-746985b5cf-l8sqm         1/1     Running   0          139m\ndefault-cloudpods-notify-dd566cfd6-hxzr4           10/10   Running   0          139m\ndefault-cloudpods-operator-7478b6c64b-wbg26        1/1     Running   0          72m\ndefault-cloudpods-region-7dfd9b888-hsvv8           1/1     Running   0          144m\ndefault-cloudpods-scheduledtask-7d69b877f7-4ltm6   1/1     Running   0          139m\ndefault-cloudpods-scheduler-8495f85798-zgvq2       1/1     Running   0          140m\ndefault-cloudpods-web-5bc6fcf78d-4f7lw             1/1     Running   0          140m\ndefault-cloudpods-webconsole-584cfb4796-4mtnj      1/1     Running   0          139m\ndefault-cloudpods-yunionconf-677b4448b6-tz62m      1/1     Running   0          139m\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u521b\u5efa\u9ed8\u8ba4\u7ba1\u7406\u7528\u6237",children:"\u521b\u5efa\u9ed8\u8ba4\u7ba1\u7406\u7528\u6237"}),"\n",(0,s.jsx)(n.h3,{id:"\u521b\u5efa\u8d26\u53f7\u767b\u5f55-web-ui",children:"\u521b\u5efa\u8d26\u53f7\u767b\u5f55 Web UI"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u662f\u4f01\u4e1a\u7248\uff0c\u524d\u7aef\u4f1a\u63d0\u793a\u6ce8\u518c\uff0c\u83b7\u53d6 license \uff0c\u4e0b\u9762\u7684\u64cd\u4f5c\u9002\u7528\u4e8e\u5f00\u6e90\u7248\u672c\uff1a"}),"\n",(0,s.jsx)(n.h3,{id:"\u8fdb\u5165-climc-\u547d\u4ee4\u884c-pod",children:"\u8fdb\u5165 climc \u547d\u4ee4\u884c pod"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u662f\u90e8\u7f72\u7684 ce(\u793e\u533a\u5f00\u6e90\u7248\u672c)\uff0c\u9700\u8981\u4f7f\u7528\u5e73\u53f0\u7684\u547d\u4ee4\u884c\u5de5\u5177\u521b\u5efa\u9ed8\u8ba4\u7528\u6237\uff0c\u8fdb\u884c\u76f8\u5173\u64cd\u4f5c\uff0c\u5bf9\u5e94\u547d\u4ee4\u5982\u4e0b\uff0c\u9996\u5148\u662f\u8fdb\u5165 climc pod \u5bb9\u5668\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u8fdb\u5165 climc pod\n$ kubectl exec -ti -n onecloud $(kubectl get pods -n onecloud | grep climc | awk '{print $1}') -- bash\nWelcome to Cloud Shell :-) You may execute climc and other command tools in this shell.\nPlease exec 'climc' to get started\n\nbash-5.1#\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u521b\u5efa\u7528\u6237",children:"\u521b\u5efa\u7528\u6237"}),"\n",(0,s.jsx)(n.p,{children:"\u5728 climc pod \u91cc\u9762\u521b\u5efa admin \u7528\u6237\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u521b\u5efa admin \u7528\u6237\uff0c\u8bbe\u7f6e\u5bc6\u7801\u4e3a admin@123 \uff0c\u6839\u636e\u9700\u6c42\u81ea\u5df1\u8c03\u6574\n[in-climc-pod]$ climc user-create --password 'admin@123' --enabled admin\n\n# \u5141\u8bb8 web \u767b\u9646\n[in-climc-pod]$ climc user-update --allow-web-console admin\n\n# \u5c06 admin \u7528\u6237\u52a0\u5165 system project \u8d4b\u4e88\u7ba1\u7406\u5458\u6743\u9650\n[in-climc-pod]$ climc project-add-user system admin admin\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u8bbf\u95ee\u524d\u7aef",children:"\u8bbf\u95ee\u524d\u7aef"}),"\n",(0,s.jsx)(n.p,{children:"\u6839\u636e\u521b\u5efa\u7684 ingress \u8bbf\u95ee\u5e73\u53f0\u66b4\u9732\u51fa\u6765\u7684\u524d\u7aef\uff0c\u901a\u8fc7\u4e0b\u9762\u7684\u547d\u4ee4\u67e5\u770b ingress \uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u6211\u6d4b\u8bd5\u7684\u96c6\u7fa4 ingress \u4fe1\u606f\u5982\u4e0b\uff0c\u4e0d\u540c\u7684 k8s \u96c6\u7fa4\u6839\u636e ingress \u63d2\u4ef6\u7684\u5b9e\u73b0\u5404\u6709\u4e0d\u540c\n$ kubectl get ingresses -n onecloud\nNAME                    HOSTS   ADDRESS                 PORTS     AGE\ndefault-cloudpods-web   *       10.127.100.207          80, 443   7h52m\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,s.jsx)(n.a,{href:"https://10.127.100.207",children:"https://10.127.100.207"})," \u5373\u53ef\u8bbf\u95ee\u5e73\u53f0\u524d\u7aef\uff0c\u7136\u540e\u4f7f\u7528\u4e4b\u524d\u521b\u5efa\u7684 admin \u7528\u6237\u767b\u9646\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4fee\u6539-api_server-\u63a5\u5165\u7aef",children:"\u4fee\u6539 api_server \u63a5\u5165\u7aef"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"api_server"})," \u914d\u7f6e\u662f\u6574\u4e2a\u5e73\u53f0\u7684\u63a5\u5165\u7aef\u5730\u5740\uff0c\u4f1a\u5f71\u54cd\u524d\u7aef CloudShell\u3001 \u865a\u62df\u673a VNC \u6216\u8005 Web SSH \u7684\u8fde\u63a5\u3002\u4e00\u822c\u65e0\u6cd5\u6253\u5f00 CloudShell \u6216\u8005\u901a\u8fc7\u524d\u7aef SSH \u8fdb\u5165\u865a\u62df\u673a\uff0c\u662f\u56e0\u4e3a\u6ca1\u6709\u6b63\u786e\u8bbe\u7f6e api_server \u914d\u7f6e\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u9700\u8981\u53c2\u8003\u6587\u6863\uff1a",(0,s.jsx)(n.a,{href:"../../operations/fe/config-ssl-certs#change-api-server-via-climc",children:"\u4fee\u6539\u670d\u52a1 api_server \u5165\u53e3\u914d\u7f6e"}),"\uff0c\u6839\u636e\u81ea\u5df1\u73af\u5883\u7684\u7f51\u7edc\u60c5\u51b5\u624b\u52a8\u4fee\u6539\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5347\u7ea7",children:"\u5347\u7ea7"}),"\n",(0,s.jsx)(n.p,{children:"\u5347\u7ea7\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u5bf9\u5e94\u7684 values yaml \u6587\u4ef6\uff0c\u7136\u540e\u8fdb\u884c\u5347\u7ea7\u914d\u7f6e\uff0c\u6bd4\u5982\u53d1\u73b0 cluster.regionServer.service.nodePort \u7684 30888 \u7aef\u53e3\u51fa\u73b0\u4e86\u5360\u7528\u51b2\u7a81\uff0c\u8981\u4fee\u6539\u6210\u5176\u5b83\u7aef\u53e3 30001\uff0c\u5c31\u4fee\u6539 values-prod.yaml \u91cc\u9762\u5bf9\u5e94\u7684\u503c\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:"--- a/charts/cloudpods/values-prod.yaml\n+++ b/charts/cloudpods/values-prod.yaml\n@@ -170,7 +170,7 @@ cluster:\n       nodePort: 30885\n   regionServer:\n     service:\n-      nodePort: 30888\n+      nodePort: 30001\n   report:\n     service:\n       nodePort: 30967\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7136\u540e\u4f7f\u7528 helm upgrade \u547d\u4ee4\u5347\u7ea7\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ helm upgrade -n onecloud default . -f values-prod.yaml\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u518d\u67e5\u770b onecloudcluster \u8d44\u6e90\uff0c\u4f1a\u53d1\u73b0\u5bf9\u5e94\u7684 spec.regionServer.service.nodePort \u53d8\u6210\u4e86 30001\uff0c\u5bf9\u5e94\u7684 service nodePort \u4e5f\u4f1a\u53d1\u751f\u53d8\u5316\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# \u67e5\u770b regionServer \u5728 onecloudcluster \u91cc\u9762\u7684\u5c5e\u6027\n$ kubectl get oc -n onecloud default-cloudpods -o yaml | grep -A 15 regionServer\n  regionServer:\n    affinity: {}\n    disable: false\n    dnsDomain: cloud.onecloud.io\n    dnsServer: 10.127.100.207\n    image: registry.cn-beijing.aliyuncs.com/yunion/region:v3.9.2\n    imagePullPolicy: IfNotPresent\n    limits:\n      cpu: "1.333333"\n      memory: 2045Mi\n    replicas: 1\n    requests:\n      cpu: 10m\n      memory: 10Mi\n    service:\n      nodePort: 30001\n\n# \u67e5\u770b default-cloudpods-region service \u7684 nodePort\n$ kubectl get svc -n onecloud | grep region\ndefault-cloudpods-region          NodePort    10.110.105.228   <none>        30001:30001/TCP                   7h30m\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u67e5\u770b\u4e4b\u524d\u53d8\u66f4\u7684 cluster.regionServer.service.nodePort \u662f\u5426\u5728\u5e73\u53f0\u7684 endpoint \u91cc\u9762\u53d1\u751f\u4e86\u53d8\u5316\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u4f7f\u7528 climc pod \u6307\u5b9a endpoint-list \u547d\u4ee4\u67e5\u770b\n$ kubectl exec -ti -n onecloud $(kubectl get pods -n onecloud | grep climc | awk '{print $1}') -- climc endpoint-list --search compute\n+----------------------------------+-----------+----------------------------------+----------------------------------------+-----------+---------+\n|                ID                | Region_ID |            Service_ID            |                  URL                   | Interface | Enabled |\n+----------------------------------+-----------+----------------------------------+----------------------------------------+-----------+---------+\n| c88e03490c2543a987d86d733b918a2d | region0   | a9abfdd204e9487c8c4d6d85defbfaef | https://10.127.100.207:30001           | public    | true    |\n| a04e161ee71346ac88ddd04fcebfe5ce | region0   | a9abfdd204e9487c8c4d6d85defbfaef | https://default-cloudpods-region:30001 | internal  | true    |\n+----------------------------------+-----------+----------------------------------+----------------------------------------+-----------+---------+\n***  Total: 2 Pages: 1 Limit: 20 Offset: 0 Page: 1  ***\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5220\u9664",children:"\u5220\u9664"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ helm delete -n onecloud default\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5176\u5b83\u95ee\u9898",children:"\u5176\u5b83\u95ee\u9898"}),"\n",(0,s.jsx)(n.h3,{id:"1-onecloud-namespace-\u7f3a\u5c11-keystone-glance-region-\u7b49-pod",children:"1. onecloud namespace \u7f3a\u5c11 keystone, glance, region \u7b49 pod"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u6267\u884c ",(0,s.jsx)(n.code,{children:"helm install"})," \u540e\uff0c\u6267\u884c ",(0,s.jsx)(n.code,{children:"kubectl get pods -n onecloud"})," \u53d1\u73b0\u53ea\u6709 operator \u8fd9\u4e2a pod\uff0c\u800c\u6ca1\u6709\u51fa\u73b0 keystone, glance, region \u8fd9\u4e9b\u5e73\u53f0\u76f8\u5173\u670d\u52a1\u7684 pod \uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u67e5\u770b operator pod \u7684\u65e5\u5fd7\u6392\u67e5\u95ee\u9898\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u51fa\u73b0\u8fd9\u79cd\u60c5\u51b5\u7684\u539f\u56e0\u4e00\u822c\u90fd\u662f operator \u5728\u521b\u5efa keystone, region \u8fd9\u4e9b\u5e73\u53f0\u76f8\u5173\u670d\u52a1\u51fa\u73b0\u4e86\u9519\u8bef\u3002\u5e38\u89c1\u7684\u95ee\u9898\u6709 operator \u65e0\u6cd5\u4f7f\u7528\u76f8\u5173\u7684 mysql \u7528\u6237\u521b\u5efa\u7528\u6237\u548c\u6570\u636e\u5e93\uff1b\u6216\u8005\u521b\u5efa\u4e86 keystone \u670d\u52a1\u540e\uff0c\u53c8\u65e0\u6cd5\u901a\u8fc7 K8s \u5185\u90e8 service \u57df\u540d\u8bbf\u95ee keystone pod \u7b49\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u5c06 operator \u7684\u6240\u6709\u65e5\u5fd7\u91cd\u5b9a\u5411\u5230\u6587\u4ef6\n$ kubectl logs -n onecloud $(kubectl get pods -n onecloud | grep operator | awk '{print $1}') > /tmp/operator.log\n# \u7136\u540e\u67e5\u770b /tmp/operator.log \u91cc\u9762\u6709\u6ca1\u6709\u76f8\u5173\u9519\u8bef\n\n\n# \u67e5\u770b operator \u65e5\u5fd7\u5f53\u4e2d\u6709\u6ca1\u6709 requeuing \u5173\u952e\u5b57\uff0c\u4e00\u822c\u9519\u8bef\u4f1a\u53cd\u9988\u5230\u8fd9\u91cc\n$ kubectl logs -n onecloud $(kubectl get pods -n onecloud | grep operator | awk '{print $1}') | grep requeuing\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>d,x:()=>i});var s=l(96540);const o={},c=s.createContext(o);function d(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);