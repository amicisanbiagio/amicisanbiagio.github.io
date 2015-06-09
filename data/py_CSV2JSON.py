#!/usr/bin/env python
# -*- coding: utf-8 -*-

# i backslash \ devono diventare doppi: \\
# non ci devono essere doppi apici “ " ”
# libro "Zac" e' in realta' "Zc"
# libro "Gen" e' in realta' "Gn"
# libro "Gion" e' in realta' "Gio"
# libro "Ga" e' in realta' "Gal"

import csv

f = open('PerArchivio.csv', 'rt')
reader = csv.reader(f)

def printGroup(group):
	item0 = group[0]
	print "\t\"field01\": \"" + str(item0[0]) + "\","
	print "\t\"field09\": \"" + item0[1] + "\","
	print "\t\"field06\": \"" + item0[2] + "\","
	print "\t\"field04\": \"" + str(item0[3]) + "\","
	print "\t\"field07\": \"" + item0[4] + "\","
	print "\t\"field10\": \"" + item0[5] + "\","
	print "\t\"field08\": \"" + item0[6] + "\","
	print

	print "\t\"field03\": ["

	cits = []
	books = []
	pericops = []
	for item in group:
		cit = item[7]+item[8]
		if cit not in cits:
			cits.append(cit)
			books.append(item[7])
			pericops.append(item[8])
	for i in range(len(cits)):
		print "\t\t\t{"
		print "\t\t\t\t\"subfield01\": \"" + books[i] + "\","
		print "\t\t\t\t\"subfield02\": \"" + pericops[i] + "\""
		if i == len(cits)-1 :
			print "\t\t\t}"
		else:
			print "\t\t\t},"
	print "\t\t],"
		
	print "\t\"field05\": ["

	dests = []
	for item in group:
		if item[9] not in dests:
			dests.append(item[9])
	for i in range(len(dests)):
		print "\t\t\t{"
		print "\t\t\t\t\"subfield01\": \"" + dests[i] + "\""
		if i == len(dests)-1 :
			print "\t\t\t}"
		else:
			print "\t\t\t},"
	print "\t\t]"


print "var json = ["

try:
	row = reader.next()
	while(1):

		group = []
		oldName = row[1]
		while( row[1] == oldName ): 
			group.append(row)
			row = reader.next()

		print "{"
		printGroup(group)
		print "},"

except:
	print "{"
	printGroup(group)
	print "}"
	print "];"
	f.close()

