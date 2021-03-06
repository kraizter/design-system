/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { Image } from 'ui/components/images/flavors/figure/index.react.example';
import className from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'image-16-9',
    label: '16:9',
    element:
      <div className="demo-only" style={{ width: '20rem' }}>
        <Image
          className={pf('image--card')}
          cropClass={pf('image__crop--16-by-9')}
          titleClass={pf('image__title--card')}
          image />
      </div>
  },
  {
    id: 'image-4-3',
    label: '4:3',
    element:
      <div className="demo-only" style={{ width: '20rem' }}>
        <Image
          className={pf('image--card')}
          cropClass={pf('image__crop--4-by-3')}
          titleClass={pf('image__title--card')}
          image />
      </div>
  },
  {
    id: 'image-1-1',
    label: '1:1',
    element:
      <div className="demo-only" style={{ width: '20rem' }}>
        <Image
          className={pf('image--card')}
          cropClass={pf('image__crop--1-by-1')}
          titleClass={pf('image__title--card')}
          image />
      </div>
  }
];
