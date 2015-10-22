# AskMe-Node
[![Build Status](https://travis-ci.org/pirsquare/askme-node.svg?branch=master)](https://travis-ci.org/pirsquare/askme-node)

AskMe Node Client

## Use Case
[See use case](https://github.com/pirsquare/askme#use-case)

## Installation

    npm install askme -g

## Usage
```shell


  Options:

    -h, --help                   output usage information
    -f, --fields <fields>        Specified fields to retrieve (comma-seperated)
    -d, --delimiter <delimiter>  Delimiter (default is " | " with spaces)
    -o, --omit-columns           Omit Columns


```

## Examples
```shell

# Get list of digitalocean's supported distribution image.
# In this case, we are querying for digitalocean's "dist-image" record
askme do dist-image

  Output:
    Id: centos-5-8-x32   | Description: Centos 5.8 32bit
    Id: centos-5-8-x64   | Description: Centos 5.8 64bit
    Id: centos-6-5-x32   | Description: Centos 6.5 32bit
    Id: centos-6-5-x64   | Description: Centos 6.5 64bit
    Id: centos-7-0-x64   | Description: Centos 7.0 64bit
    Id: coreos-alpha     | Description: CoreOS Alpha
    Id: coreos-beta      | Description: CoreOS Beta
    Id: coreos-stable    | Description: CoreOS Stable
    Id: debian-6-0-x32   | Description: Debian 6.0 32bit
    Id: debian-6-0-x64   | Description: Debian 6.0 64bit
    Id: debian-7-0-x32   | Description: Debian 7.0 32bit
    Id: debian-7-0-x64   | Description: Debian 7.0 64bit
    Id: debian-8-x32     | Description: Debian 8 32bit
    Id: debian-8-x64     | Description: Debian 8 64bit
    Id: fedora-21-x64    | Description: Fedora 21 64bit
    Id: fedora-22-x64    | Description: Fedora 22 64bit
    Id: freebsd-10-1-x64 | Description: FreeBSD 10.1 64bit
    Id: freebsd-10-2-x64 | Description: FreeBSD 10.2 64bit
    Id: ubuntu-12-04-x32 | Description: Ubuntu 12.04 32bit
    Id: ubuntu-12-04-x64 | Description: Ubuntu 12.04 64bit
    Id: ubuntu-14-04-x32 | Description: Ubuntu 14.04 32bit
    Id: ubuntu-14-04-x64 | Description: Ubuntu 14.04 64bit
    Id: ubuntu-15-04-x32 | Description: Ubuntu 15.04 32bit
    Id: ubuntu-15-04-x64 | Description: Ubuntu 15.04 64bit



# Omit columns and only show ids
askme do dist-image -o --fields="id"

  Output:
	centos-5-8-x32
    centos-5-8-x64
    centos-6-5-x32
    centos-6-5-x64
    centos-7-0-x64
    coreos-alpha
    coreos-beta
    coreos-stable
    debian-6-0-x32
    debian-6-0-x64
    debian-7-0-x32
    debian-7-0-x64
    debian-8-x32
    debian-8-x64
    fedora-21-x64
    fedora-22-x64
    freebsd-10-1-x64
    freebsd-10-2-x64
    ubuntu-12-04-x32
    ubuntu-12-04-x64
    ubuntu-14-04-x32
    ubuntu-14-04-x64
    ubuntu-15-04-x32
    ubuntu-15-04-x64



# Change delimiter value. Query google compute engine's supported disk type
askme gcloud gce-disk-type --delimiter=" || "

  Output:
    Id: local-ssd   || Description: Local SSDs
    Id: pd-ssd      || Description: SSD Persistent Disk
    Id: pd-standard || Description: Standard Persistent Disk


```


## Testing

    npm test


## Supported fields
[See supported fields](https://github.com/pirsquare/askme#supported-fields)


## Supported records
[See supported records](https://github.com/pirsquare/askme#aws)


## Note
Do not modify `source` directory. We use git subtree to push source data to source directory. If you want submit PR for changes in source data, submit it at [AskMe main repo](https://github.com/pirsquare/askme).