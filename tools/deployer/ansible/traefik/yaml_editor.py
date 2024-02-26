import yaml
import sys

service_url=sys.argv[1]

certFile="/certs/"+service_url+".crt"
keyFile="/certs/"+service_url+".key"

with open('/home/code/traefik.yml','r') as yamlfile:
    cur_yaml = yaml.safe_load(yamlfile)
    cur_yaml['tls']['certificates'].append({'certFile': certFile, 'keyFile': keyFile})
    print(cur_yaml)

with open('/home/code/traefik.yml','w') as yamlfile:
    yaml.safe_dump(cur_yaml, yamlfile)