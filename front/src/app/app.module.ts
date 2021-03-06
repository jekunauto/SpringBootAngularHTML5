/*
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpService } from './http.service';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpClientXsrfModule,
        AppRoutingModule,
        NgHttpLoaderModule,
    ],
    providers: [
        HttpService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
