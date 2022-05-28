local base = import '../base.libsonnet';
local tag = importstr './tag.txt';

base {
  imageTag: tag,
  domainName: 'www.k8s.deltafi-dev.trade',
}
