#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'Claudiu Rediu'
SITENAME = 'Vidwalk'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'Europe/Berlin'

DEFAULT_LANG = 'English'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
'''LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)'''

# Social widget
SOCIAL = (('twitter', 'https://twitter.com/claudiusrediu'),
          ('github', 'https://github.com/vidwalk'),
          ('email', 'claudiurediu@gmail.com'),)

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

THEME = 'themes'

PROFILE_IMAGE = 'LionwallpaperOwn.png'

#using our own defined color theme
COLOR_THEME = '0g'