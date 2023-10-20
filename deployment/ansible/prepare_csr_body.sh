#!/bin/bash
echo $(cat $1.csr | sed 's/$/\\n/' | tr -d '\n')