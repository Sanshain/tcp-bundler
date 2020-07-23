#-------------------------------------------------------------------------------
# Name:        module1
# Purpose:
#
# Author:      User
#
# Created:     23.07.2020
# Copyright:   (c) User 2020
# Licence:     <your licence>
#-------------------------------------------------------------------------------

import socket
import os
import time

def main():

    filename = './samples/init.ts'

##    with open(filename, 'r') as eye:
##        content = eye.read()

    sock = socket.socket()
    try:

        sock.connect(("localhost", 9098))
        sock.send(filename)
        r = sock.recv(10)
        print(r)

    except Exception as ex:

        print(ex)

##        print('Fix the exception in 30 seconds')
##        time.sleep(30000)

        os.system('node index')
        main()

if __name__ == '__main__':
    main()
