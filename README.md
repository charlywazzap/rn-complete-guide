Notes

- Expo vs React Native

    Expo is easier and wrapper

    React Native, is more fine grained but needs more experitce 

- RESOURCES

    [https://academind.com/tutorials/react-native-vs-flutter-vs-ionic-vs-nativescript-vs-pwa/](https://academind.com/tutorials/react-native-vs-flutter-vs-ionic-vs-nativescript-vs-pwa/)

    [https://docs.expo.io/versions/v34.0.0/introduction/installation/](https://docs.expo.io/versions/v34.0.0/introduction/installation/) 

    [https://facebook.github.io/react-native/docs/getting-started](https://facebook.github.io/react-native/docs/getting-started) 

    [https://reactnative.dev/docs/flexbox](https://reactnative.dev/docs/flexbox)

    [https://reactjs.org/docs/hooks-intro.html](https://reactjs.org/docs/hooks-intro.html)

    [https://facebook.github.io/react-native/docs/components-and-apis](https://facebook.github.io/react-native/docs/components-and-apis) 

    [https://docs.expo.io/versions/latest/](https://docs.expo.io/versions/latest/)

    [https://developers.google.com/web/tools/chrome-devtools/](https://developers.google.com/web/tools/chrome-devtools/) 

    - Expo Debugging Docs: [https://docs.expo.io/versions/v34.0.0/workflow/debugging/](https://docs.expo.io/versions/v34.0.0/workflow/debugging/)
    - Chrome Dev Tools Docs: [https://developers.google.com/web/tools/chrome-devtools/](https://developers.google.com/web/tools/chrome-devtools/)

    [https://reactnative.dev/docs/colors](https://reactnative.dev/docs/colors) 

- Styling

    react native there is no CSS but inspired in CSS, styled sheet objects prefered

    Views has flex box, flex box has a main access determined bu the direction f the flex

    depending on the main axis the fill of the child elements will be filled

    justifyContent. to org elements in the main axis

    alignItems to org elements on the cross axis

    on child elements you will need to use the flex prop, this flex prop are segments that the parent div is devided and you then let the element take up that space 

- <View> vs <Text> - A Summary

    `<Text>` and `<View>` are probably **THE most important/ most-used components** built into React Native.

    - --

    `<View>` is your #1 component if you need to group and structure content (= provide a layout) and/ or if you want to style something as a container (e.g. the `<Card>` look we built in our custom `<Card>` component).

    `<View>` uses **Flexbox** to organize its children - have a look at the Flexbox deep dive earlier in this course (**in module 2**) to learn more about how that works.

    A `<View>` can hold as many child components as you need and it also works with any kind of child component - it can hold `<Text>` components, other `<View>`s (for nested containers/ layouts), `<Image>`s, custom components etc.

    If you need scrolling, you should consider using a `<ScrollView>` - you could wrap your `<View>` with it or replace your `<View>` (that depends on your layout and styling). Please note, that due to its scrollable nature, Flexbox works a bit differently on a `<ScrollView>`: [https://stackoverflow.com/questions/46805135/scrollview-with-flex-1-makes-it-un-scrollable](https://stackoverflow.com/questions/46805135/scrollview-with-flex-1-makes-it-un-scrollable)

    - --

    `<Text>` is also super important. As its name suggests, you use it for outputting text (of any length). You can also **nest other `<Text>` components** into a `<Text>`. Actually, you can also have nested `<View>`s inside of a `<Text>` but that comes with certain caveats you should watch out for: [https://github.com/facebook/react-native/commit/a2a03bc68ba062a96a6971d3791d291f49794dfd](https://github.com/facebook/react-native/commit/a2a03bc68ba062a96a6971d3791d291f49794dfd)

    Unlike `<View>`, `<Text>` does **NOT use Flexbox** for organizing its content (i.e. the text or nested components). Instead, text inside of `<Text>` automatically fills a line as you would expect it and wraps into a new line if the text is too long for the available `<Text>` width.

    You can avoid wrapping by setting the `numberOfLines` prop, possibly combined with `ellipsizeMode`.

    Example:

    `1. <Text numberOfLines={1} ellipsizeMode="tail">
    2.   This text will never wrap into a new line, instead it will be cut off like this if it is too lon...
    3. </Text>`

    **Also important**: When adding styles to a `<Text>` (no matter if that happens via inline styles or a `StyleSheet` object), the styles will actually be shared with any nested `<Text>` components.

    This **differs from the behavior** of `<View>` (or actually any other component - `<Text>` is the exception): There, any styles are **only applied to the component to which you add them**. Styles are never shared with any child component!

- Icons

    [https://icons.expo.fyi/](https://icons.expo.fyi/)

- UI - libraries

    [https://github.com/GeekyAnts/NativeBase](https://github.com/GeekyAnts/NativeBase)

    [https://github.com/react-native-training/react-native-elements](https://github.com/react-native-training/react-native-elements)
