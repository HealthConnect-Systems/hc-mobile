import 'package:flutter/material.dart';
import 'package:hc_mobile/Screens/homepage.dart';

class DrawerWidget extends StatelessWidget {
  const DrawerWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: SizedBox(
          width: MediaQuery.of(context).size.width * 0.6, //<-- SEE HERE
          child: Drawer(
            child: Column(children: [
              SizedBox(
                width: MediaQuery.of(context).size.width,
                height: MediaQuery.of(context).size.width * 0.3,
                child: const Center(
                    child: Text(
                  'Health Connect ',
                  style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold),
                )),
              ),
              Expanded(
                child: ListView(
                  physics: const BouncingScrollPhysics(),
                  padding: const EdgeInsets.all(12),
                  children: [
                    ListTile(
                      title: const Text(
                        'Home',
                        style: TextStyle(color: Colors.black),
                      ),
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => const MyHomePage()),
                        );
                      },
                    ),
                    const Divider(
                      thickness: 1.1,
                    ),
                    ListTile(
                      title: const Text(
                        'Discussions',
                        style: TextStyle(color: Colors.black),
                      ),
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => const MyHomePage()),
                        );
                      },
                    ),

                    // ListTile(
                    //   title: Text(
                    //     'နေ့အလိုက်မီနူးစာရင်း',
                    //     style: TextStyle(color: ColorManager.drawertext),
                    //   ),
                    //   onTap: () {
                    //     Navigator.push(
                    //       context,
                    //       MaterialPageRoute(
                    //           builder: (context) => DailyMenuScreen()),
                    //     );
                    //   },
                    // ),
                  ],
                ),
              ),
              Padding(
                padding:
                    const EdgeInsets.symmetric(vertical: 20, horizontal: 20),
                child: Column(
                  children: [
                    Container(
                      width: MediaQuery.of(context).size.width * 0.5,
                      height: MediaQuery.of(context).size.width * 0.1,
                      decoration: BoxDecoration(
                        color: Colors.blueAccent,
                        borderRadius: BorderRadius.circular(20),
                      ),
                      child: const Center(
                          child: Text(
                        'Login',
                        style: TextStyle(fontSize: 12),
                      )),
                    ),
                    const SizedBox(
                      height: 10,
                    ),
                    Container(
                      width: MediaQuery.of(context).size.width * 0.5,
                      height: MediaQuery.of(context).size.width * 0.1,
                      decoration: BoxDecoration(
                        color: Colors.amberAccent,
                        borderRadius: BorderRadius.circular(20),
                      ),
                      child: const Center(
                          child: Text(
                        'Logout',
                        style: TextStyle(fontSize: 12),
                      )),
                    ),
                  ],
                ),
              )
            ]),
          )),
    );
  }
}
