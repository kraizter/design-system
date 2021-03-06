/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';

import Button from 'ui/components/buttons/index.react';
import Truncate from 'ui/components/lib/truncate/index.react';
import Heading from 'ui/components/heading/index.react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import MediaObject from 'ui/utilities/media-objects/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { prefix as pf } from 'app_modules/ui/util/component';


const image = (
  <SvgIcon className={pf('icon icon-standard-user')} sprite="standard" symbol="user" />
);

export default (
  <div className="slds-page-header" role="banner">
    <div className={pf('grid')}>
      <div className={pf('col has-flexi-truncate')}>
        <MediaObject figureLeft={image} className={pf('no-space grow')}>
          <Heading className={pf('line-height--reset')} flavor="label">Record Type</Heading>
          <h1 className={pf('page-header__title m-right--small align-middle truncate')} title="this should match the Record Title">Record Title</h1>
        </MediaObject>
      </div>
      <div className={pf('col no-flex grid align-top')}>
        <Button flavor="neutral" className={pf('not-selected')} aria-live="assertive">
          <span className={pf('text-not-selected')}><SvgIcon className={pf('button__icon--stateful button__icon--left')} sprite="utility" symbol="add" />Follow</span>
          <span className={pf('text-selected')}><SvgIcon className={pf('button__icon--stateful button__icon--left')} sprite="utility" symbol="check" />Following</span>
          <span className={pf('text-selected-focus')}><SvgIcon className={pf('button__icon--stateful button__icon--left')} sprite="utility" symbol="close" />Unfollow</span>
        </Button>
        <div className={pf('button-group')} role="group">
          <Button flavor="neutral">
            Edit
          </Button>
          <Button flavor="neutral">
            Delete
          </Button>
          <Button flavor="neutral">
            Clone
          </Button>
          <div className={pf('dropdown-trigger dropdown-trigger--click button--last')} aria-expanded="false">
            <ButtonIcon
              className={pf('button--icon-border-filled')}
              symbol="down"
              aria-haspopup="true"
              assistiveText="More Actions" />
          </div>
        </div>
      </div>
    </div>
    <ul className={pf('grid page-header__detail-row')}>
      <li className={pf('page-header__detail-block')}>
        <p className={pf('text-title truncate m-bottom--xx-small')} title="Field 1">Field 1</p>
        <p className={pf('text-body--regular truncate')} title="Description that demonstrates truncation with a long text field">
          Description that demonstrates truncation with a long text field.
        </p>
      </li>
      <li className={pf('page-header__detail-block')}>
        <p className={pf('text-title truncate m-bottom--xx-small')} title="Field2 (3)">
          Field 2 (3)
          <ButtonIcon
            className={pf('button--icon')}
            iconClassName={pf('button__icon--small')}
            symbol="down"
            aria-haspopup="true"
            assistiveText="More Actions" />
        </p>
        <p className={pf('text-body--regular')}>Multiple Values</p>
      </li>
      <li className={pf('page-header__detail-block')}>
        <p className={pf('text-title truncate m-bottom--xx-small')} title="Field 3">Field 3</p>
        <a href="javascript:void(0);">Hyperlink</a>
      </li>
      <li className={pf('page-header__detail-block')}>
        <p className={pf('text-title truncate m-bottom--xx-small')} title="Field 4">Field 4</p>
        <p>
          <Truncate amount={50}>
            Description (2-line truncation—must use JS to truncate).
          </Truncate>
        </p>
      </li>
    </ul>
  </div>
);
