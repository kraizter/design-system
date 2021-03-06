/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { prefix as pf } from 'app_modules/ui/util/component';


export const preview = (
  <div className="demo-only demo-container">
    <div className={pf('grid wrap grid--pull-padded')}>
      <div className={pf('p-horizontal--small size--1-of-1 p-bottom--large')}>
        <div className={pf('box box--small theme--shade text-align--center')}>1</div>
      </div>
      <div className={pf('p-horizontal--small size--1-of-2 medium-size--5-of-6 large-size--8-of-12 p-bottom--large')}>
        <div className={pf('box box--small theme--shade text-align--center')}>2</div>
      </div>
      <div className={pf('p-horizontal--small size--1-of-2 medium-size--1-of-6 large-size--4-of-12 p-bottom--large')}>
        <div className={pf('box box--small theme--shade text-align--center')}>3</div>
      </div>
      <div className={pf('p-horizontal--small size--1-of-1 medium-size--1-of-2 large-size--1-of-3 p-bottom--large')}>
        <div className={pf('box box--small theme--shade text-align--center')}>4</div>
      </div>
      <div className={pf('p-horizontal--small size--1-of-1 medium-size--1-of-2 large-size--1-of-3 p-bottom--large')}>
        <div className={pf('box box--small theme--shade text-align--center')}>5</div>
      </div>
      <div className={pf('p-horizontal--small size--1-of-1 large-size--1-of-3')}>
        <div className={pf('grid wrap grid--pull-padded')}>
          <div className={pf('p-horizontal--small size--1-of-2 medium-size--1-of-1 large-size--1-of-2 p-bottom--large')}>
            <div className={pf('box box--small theme--shade text-align--center')}>6</div>
          </div>
          <div className={pf('p-horizontal--small size--1-of-2 medium-size--1-of-1 large-size--1-of-2 p-bottom--large')}>
            <div className={pf('box box--small theme--shade text-align--center')}>7</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const code = (
  <div className="demo-only demo-container">
    <div className={pf('grid wrap grid--pull-padded')}>
      <div className={pf('p-horizontal--small size--1-of-1')}>1</div>
      <div className={pf('p-horizontal--small size--1-of-2 medium-size--5-of-6 large-size--8-of-12')}>2</div>
      <div className={pf('p-horizontal--small size--1-of-2 medium-size--1-of-6 large-size--4-of-12')}>3</div>
      <div className={pf('p-horizontal--small size--1-of-1 medium-size--1-of-2 large-size--1-of-3')}>4</div>
      <div className={pf('p-horizontal--small size--1-of-1 medium-size--1-of-2 large-size--1-of-3')}>5</div>
      <div className={pf('p-horizontal--small size--1-of-1 large-size--1-of-3')}>
        <div className={pf('grid wrap grid--pull-padded')}>
          <div className={pf('p-horizontal--small size--1-of-2 medium-size--1-of-1 large-size--1-of-2')}>6</div>
          <div className={pf('p-horizontal--small size--1-of-2 medium-size--1-of-1 large-size--1-of-2')}>7</div>
        </div>
      </div>
    </div>
  </div>
);
