const releases = require('./releases.json');
const { getPPARepoName, getChartVersionName, getVersion } = require('./variableUtils');

const variables = {
  prodname: 'Calico',
  prodnamedash: 'calico',
  version: getVersion(releases),
  baseUrl: '/calico/2.0.0', // or e.g. /calico/next
  prodnameWindows: 'Calico for Windows',
  nodecontainer: 'calico/node',
  noderunning: 'calico-node',
  rootDirWindows: 'C:\\CalicoWindows',
  ppa_repo_name: getPPARepoName(releases),
  chart_version_name: getChartVersionName(releases),
  releases,
  registry: '',
  vppbranch: 'master',
  imageNames: {
    'calico/node': 'calico/node',
    calicoctl: 'calico/ctl',
    typha: 'calico/typha',
    'calico/cni': 'calico/cni',
    'calico/apiserver': 'calico/apiserver',
    'calico/kube-controllers': 'calico/kube-controllers',
    'calico-upgrade': 'calico-upgrade',
    'calico/windows': 'calico/windows',
    flannel: 'docker.io/flannelcni/flannel',
    flannelMigration: 'calico/flannel-migration-controller',
    'calico/dikastes': 'calico/dikastes',
    'pilot-webhook': 'calico/pilot-webhook',
    flexvol: 'calico/pod2daemon-flexvol',
    'csi-driver': 'calico/csi',
    'csi-node-driver-registrar': 'calico/node-driver-registrar',
  },
};

module.exports = variables;