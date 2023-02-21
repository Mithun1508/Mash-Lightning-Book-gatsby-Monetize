#!/bin/bash
if [ "$production" == "true" ]
then	
	npm run serve
else
	npm run build && npm run serve
fi