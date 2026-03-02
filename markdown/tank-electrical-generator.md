# Tank Electrical Generator

**Author:** Lloyd B. Zirbes
**Source:** Original manuscript, from Jen Brannstrom / LloydBZirbes repo
**Scans:** https://photos.app.goo.gl/fXUetmn64TStt7rG9

---

## The Capacitor as a Battery

Look at the capacitor as a battery, because it acts just like a battery.

[Drawing — capacitor charging circuit — see original manuscript scans]

Energize the capacitor as seen above, disconnect the capacitor from the battery, it will now be charged with a voltage equal to the battery and contain a amperage value in accordance with the capacity of the capacitor, see the following drawing.

[Drawing — charged capacitor disconnected — see original manuscript scans]

We will now connect the charged capacitor across a one to one transformer and allow the capacitor to discharge through the primary of the transformer as seen below.

[Drawing — capacitor discharging through transformer — see original manuscript scans]

The discharging of the capacitor through the transformer primary winding (TP) results in the current (mass) in the capacitor to pass through the primary winding under a potential of 60 volts.

This will reflect in the transformer secondary winding (TS) as Follows. The transformer secondary (TS) winding will begin with a zero output and then move to a maximum output and then decay back to zero, the output of the TS is shown in the following illustration.

[Drawing — transformer secondary output waveform — see original manuscript scans]

The instruments, i.e. voltmeters ampere meters and oscilloscope will tell you exactly whats happening. The O-scope will show 1/2 the A-C cycle and the voltage of that 1/2 cycle as seen below.

[Drawing — oscilloscope half-cycle display — see original manuscript scans]

Now reverse the polarity of the battery and once again charge the capacitor. Now discharge the capacitor through the primary winding of the transformer and you complete the alternating current output from the secondary winding of the transformer.

The first discharge (we will assume) was in a positive direction, this discharge will then be in a negative direction, the completed sine wave can be seen in the following illustration.

[Drawing — complete sine wave — see original manuscript scans]

---

## The Tank Circuit Oscillation Principle

The reversing of the capacitor charge is exactly what happens when the tank circuit begins to oscillate! Therefor, with 60 volts of direct current applied to the tank circuit, the alternating current output will be doubled or in this case, 120 volts A.C. a capacitor, under operating conditions, will never completely discharge. It will discharge about 63 percent of its ampere (mass) charge. Further more, the amperes (mass) itself will oscillate from one side of the capacitor to the other side, this results in a lower value of amperes required from the input power.

To select the proper values of your components you must first decide what output power is desired. Assuming you want an output power of 120 A.C. volts with about a 20 ampere flow (2400 watts) you will select a capacitor that will "hold" 17 amperes with a 60 volt pressure across it. The capacitor will discharge 63 percent of the amperage it contains. Therefor, 63 percent of the 17 amperes is 10.71 amperes. That 10.71 amperes is now "pushed" through the primary winding of the transformer by the 60 volt charge of the capacitor.

A quality transformer is about 97 percent efficient, thereby; each 1/2 cycle will have an output of 618 watts, therefor, a complete cycle will have an output of 120 A.C. volts and an ampere flow of 10.3 A.C. amperes, or a total of 1236 A.C. watts.

---

## Input Power Considerations

Now, lets consider the input power. We will assume that you have a "hairy" capacitor that will accept 17 amperes with 60 D.C. volts across it. That capacitor is hooked in parallel with the primary winding of a properly designed transformer. The capacitor, transformer circuit (tank) is now connected to a D.C. source with a 60 volt value and an unrestricted ampere flow of at least 17 amperes. See following illustration.

[Drawing — tank circuit with DC source — see original manuscript scans]

We will assume that this tank is designed to oscillate at 60 cycles per second.

Now- when you turn on the switch the circuit will consume 17 amperes of current, this consumption will have a duration of 16.6 milli seconds (16.6/1000 sec.) The current flow will then drop to 10 amperes after a second duration of 16.6 milli seconds. During the third duration, the ampere flow will drop to 4 amperes. The tank will there after remain at a consumption value of 4 amperes. This is because the tank will oscillate the current back and forth and will remain in the tank circuit, the current that remains in the tank circuit will not be replaced. Therefor; we have an input power of 60 volts and 4 amperes; the power in is 240 watts. Compare the 240 watts in with the 1236 A.C. watts out!!!

The previous information is for the sole purpose of showing how a tank works with the related input to output power to output power.

---

## Voltage Regulation Problem

We can now see a problem as the load on the secondary winding is increased. The output voltage begins to fall.

We will overcome the output voltage problem by injecting a D.c. voltage in to each tank. In the injector circuit, which is taken from the out-put winding of the transformer, we will lose about 5 percent of the total output power.

However, in the process of injecting a voltage into each tank we can decrease the voltage as used in the ampere supply circuit.

Keep in mind that a capacitor will Block the Passage of Direct Current. But the capacitor will pass a Alternating current. Therefor, it becomes absolutely necessary to apply Direct current to the tanks.!!!

Although the tank itself will be energized by two seperate circuits, the tank will respond and accept the voltage and the amperes made available to it; it will than become a circuit in itself and the tank function will be independent of the input circuits.

I would strongly urge that you use 120 volts for your output power. By doing this, you can use for the load, standard household light bulbs.

---

## Four-Tank Configuration

To keep things as simple as possible, I would suggest that 4 tanks be used. This means you will need 4 transformers that are identical.

You will use tertiary transformers, that is to say; a transformer with 3 windings. In the following drawing is a tertiary wound transformer.

[Drawing — tertiary transformer — see original manuscript scans]

### Tertiary Transformer

The primary and the 2nd, secondary will be a l to l winding; that is to say, they are equal. The 1st. secondary will be used for the voltage injector circuit. The 1st. secondary winding must have a one half (1/2) cycle output of 60 volts and a very low ampere output of 500 milli amperes (1/2 amp). The total output of the 1st secondary winding will then be 120 volts with a 1/2 ampere current flow, the alternating current wattage will be 60 watts. The 60 A.C. watts must now be rectified with a full wave rectifier, with filters. This will result in a smooth D.C. voltage of 60 volts.

The diodes must be of good quality. A damaged or malfunctioning diode will result in excessive voltage drop across the diode, resulting in a lower then desired D.C. voltage. The filters must be of a correct value to eliminate a possible pulsating D.C. output. Of course, the filters are merely capacitors on each leg of the rectified D.C. output.

---

FROM THIS POINT ON, I WILL ASSUME THE FINAL ALTERNATING CURRENT OUTPUT IS 120 VOLTS AT A AMPERE VALUE OF 10.05 (P=IE) OR 1206 WATTS. This allows for 5% loss which will be used in the voltage injector system

---

## Current Supply System

The current supply system will be backed with 15 volts (D.C.) being dropped across each tank circuit, therefor, 4 tanks at 15 volts each equals a source voltage of 60 volts

[Drawing — 4 tank circuits in series — see original manuscript scans]

The above circuit shows 4 tank circuits. Placing volt meters across the tanks will show that each tank circuit will have 15 volts dropped across it as show.

When the circuit is first switched on it will consume 17 amperes, it will than decrease to 10 amperes and than decrease to the continuous operation amperage of 4 amperes.

The ampere flow decrease will take place within several seconds, therefor, the power consumed in the ampere supply circuit will be 240 D.c. watts. To assure a pure D.C. supply it would be logical to use 5- 12 volt wet cell batteries that are connected in series.

[Drawing — 5 batteries in series — see original manuscript scans]

This arrangement of car batteries will give a pure 60 volt supply with 100 amperes available, however, the tank circuit in operation will only draw 4 amps.

---

## Voltage Injector System

We can now look at the voltage injector system. To produce 120 volts A.C. to the output we will insert 60 volts of D.C. into the tank system.

The number two winding of the tertiary transformer is designed to produce 60 volts in each direction, positive direction 60 volts and negitive direction 60 volts.

This A.C. voltage will now be rectified with a full wave rectifier which will produce a 60 volt D.c. potential.

[Drawing — voltage injector rectifier circuit — see original manuscript scans]

We can now place the rectified D.C. from tank 1 to tank 2- the rectified D.C. from tank 2 will go to tank 3, the rectified D.C. from tank 3 will be connected to tank 4 and the rectified D.C. from tank 4 will be connected to tank number 1.

The voltage injection circuit may be seen in the following schematic.

[Drawing — voltage injection schematic, cross-connected 4 tanks — see original manuscript scans]

The voltage injector system will keep itself energized after it is in operation.

The primary energizing of the tank generators voltage injector system can be done by using the D.C. power supply from the current supply battery source. As can be seen below.

[Drawing — initial energizing circuit — see original manuscript scans]

The voltage injector system may be energized by the energizer circuit by connecting to any convenient place into one of the voltage injector circuits.

The single energized voltage circuit will reflect through out the 4 tank circuits within several seconds, the compound switch can than be opened and the circuit will continue to function.

---

## Complete Tank Electrical Generator

We can now put the tank electrical generator together.

Under operating conditions, the total D.C. input power will be 240 watts.
Under operating conditions, the total A.C. output power is 4,729 watts.

[Drawing — complete tank electrical generator schematic — see original manuscript scans]

This power gain is not magic, there is nothing mystical about it. This function is the results of using or/and recycling the ampere flow over and over again. As the amperage oscillates back and forth in a tank, the output winding of the transformer produces a substantial usable wattage, when a small amount of current (4Amps) leaves a tank, it moves to another tank and is once more used in the oscillation of that tank.

We really do not have to speak of efficiency factors because we will with a passing of time, use the output power from one of the tanks to provide for the current flow system. Of course, we could eliminate the voltage injector system and apply the required voltage with the current flow circuit, you could, or perhaps should consider this option, however, there must be 60 D.C. volts dropped across each tank circuit so as to provide an A.C. output of 120 volts.

That would mean (using 4 tanks) the current circuit would have to be backed with 240 D.C. volts, the ampere flow would remain the same. Therefor, the 4 amperes times the voltage of 240 would mean a wattage consumption of 960. The output wattage will remain the same.

With 960 D.C. watts input and a output of 4,729 watts is not to bad. The A.C. output is apparent power; the actual power, or true power out is 50 percent of the A.C. power, which is the direct current value. In regards to the situation we are now speaking of, this results in 960 D.C. watts as input power and 2360 D.C. watts of output power. this represents actual power, not apparent power.!

Therefor; we have a true power gain of 2.4, in other words, we have 140 percent over unity.!

As previously mentioned, we need not consider efficiency factors should you decide to use the output of one of the tanks as the input supply.

---

## Advantages and Disadvantages

There is advantage of using the current and voltage system together.

1/ The transformers will be more economical.
2/ Eliminate the need of 4 full wave rectifiers.

There is also disadvantages

1/ You will need 20 wet cell batteries.
2/ The input power requirements are greater.

---

## Single Circuit Option

Should you decide to use a single circuit for the voltage and the amperes, you will than begin with 4; l to l transformers. l to l simply indicates the primary winding is the very same as the secondary winding.

[Drawing — 4 tank circuit with 1:1 transformers — see original manuscript scans]

---

## Self-Contained Unit

Should you decide to construct a completely self contained unit, i.e. no outside power in.

You will then need 3; l to l transformers and l; l to two transformers. the step up transformer (1-2) will provide the 240 volts required for the supply.

[Drawing — self-contained unit schematic — see original manuscript scans]

This circuit must be energized by a outside source of 240 volts D.C. After it is energized the outside source (batteries) is removed. This circuit has a zero value of input power and a output power of 3546 A.C. watts.

---

The power supply circuit transformer has an output voltage of 240 and 4.9 amperes which is (P=EI) 1182 watts.
