import 'package:flutter/material.dart';
import 'package:hc_mobile/widgets/drawer_widgets.dart';

class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.brown,
        centerTitle: true,
        title: const Text(
          "Health Connect ",
          style: TextStyle(color: Colors.blueGrey),
        ),
      ),
      drawer: const DrawerWidget(),
    );
  }
}
