Bootstrap-Fullscreen-Modal
==========================

Extends Bootsrap Modal. Resizes modal window to fit viewport.

Requirements
============
uh.....bootstrap-modal

Usage
=====

* Use data-toggle="external-modal" (instead of bootstrap data-toggle="modal") on your button/link trigger.
* Or, replace $(this).modal('show') with $(this).externalModal(); with your on('click')
* Include an iframe with empty src='' inside .modal-body div for external site support