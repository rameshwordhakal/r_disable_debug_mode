# -*- coding: utf-8 -*-
{
    'name': "Disable Debug Mode",

    'summary': """
        Module to disable debug mode for non-admin users.""",

    'description': """
        This module can be used in production server to disable debug mode for non-administrator users.
        Only users having Administration/Settings access is able to activate debug mode.
    """,

    'author': "Rameshwor Dhakal",

    'version': '1.0',
    'license': 'AGPL-3',

    'depends': ['base', 'web'],

    'data': [
        'views/templates.xml',
    ],
    'images': [
        'static/description/banner.png',
    ],
}
