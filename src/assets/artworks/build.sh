#!/usr/bin/env bash

for file in *.png; do 
    echo $file
    convert $file -resize x500 $file
done

for file in *.jpg; do 
    echo $file
    convert $file -resize x500 $file
done
