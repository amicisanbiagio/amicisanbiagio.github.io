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

print "var json = ["

try:
	row = reader.next()
	while(1):
		group = []
		oldName = row[1]

		while( row[1] == oldName ): 
			group.append(row)
			row = reader.next()

		item0 = group[0]
		print "{"
		print "\t\"field01\": \"" + str(item0[0]) + "\","
		print "\t\"field09\": \"" + item0[1] + "\","
		print "\t\"field06\": \"" + item0[2] + "\","
		print "\t\"field04\": \"" + str(item0[3]) + "\","
		print "\t\"field07\": \"" + item0[4] + "\","
		print "\t\"field10\": \"" + item0[5] + "\","
		print "\t\"field08\": \"" + item0[6] + "\","
		print

		print "\t\"field03\": ["
		for i in range(len(group)):
			print "\t\t\t{"
			print "\t\t\t\t\"subfield01\": \"" + group[i][7] + "\","
			print "\t\t\t\t\"subfield02\": \"" + group[i][8] + "\""
			if i == len(group)-1 :
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

		print "},"

except:
	print "];"
	f.close()

# ricordarsi di modificare la penultima riga!
# da "}," a "}"

